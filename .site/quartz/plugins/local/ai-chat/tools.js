/* ================================================================
 AI Chat Widget — Agent tool registry + Pyodide sandbox.
 Prepended to chat.js (same IIFE scope, plain top-level script).
 Adds: TOOL_LIB (execution) + TOOL_SCHEMAS (OpenAI tool schema) +
 Pyodide-backed run_python. See chat.js for the agent loops that
 consume these (executeTool delegates to TOOL_LIB).

 Adapted for the obsidian-vault (Agentic Coding / Hermes Agent /
 Package Development). CityUHK-specific admission/score tools were
 REMOVED; generic retrieval + domain-aware tools + Pyodide remain.
 ================================================================ */

  // ---- Tool registry helpers ----
  var TOOL_LIB = {};   // name -> fn(args, ctx) -> result object
  var TOOL_SCHEMAS = []; // {name, description, parameters}

  function tool(def) {
    TOOL_LIB[def.name] = def.fn;
    TOOL_SCHEMAS.push({
      type: "function",
      function: {
        name: def.name,
        description: def.description,
        parameters: def.parameters || { type: "object", properties: {}, required: [] }
      }
    });
  }
  function strParam(d) { return { type: "string", description: d }; }
  function intParam(d) { return { type: "integer", description: d }; }
  function boolParam(d) { return { type: "boolean", description: d }; }
  function strArrParam(d) { return { type: "array", items: { type: "string" }, description: d }; }
  function limitParam() { return intParam("Max items to return (default 5, max 10)"); }
  function textParam() { return strParam("Keywords, e.g. \"LLM agent memory design\""); }
  function normStr(v) { return String(v == null ? "" : v).trim(); }
  function normList(v) {
    if (Array.isArray(v)) return v.map(normStr).filter(Boolean);
    if (typeof v === "string") return v.split(/[,;]/).map(normStr).filter(Boolean);
    return [];
  }
  function entryByIdx(i) { return (knowledgeIndex && knowledgeIndex[i]) || null; }

  // Short answer: prefer a Callout/Tip block (works if present); otherwise
  // fall back to the first "## " section's leading lines, then the note start.
  // obsidian-vault notes use "## 🎯 Motivation" / "## 📋 Concrete Example" /
  // "## 🔗 Analogy" style headings (no "> [!tip]" callouts), so the fallback
  // is what actually runs here.
  function shortAnswer(entry) {
    var text = entry.text || "";
    // 1) A Callout/Tip block, if the note has one.
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; i++) {
      if (/^>\s*\[!(tip|info|note)\]/.test(lines[i])) {
        var out = [];
        for (var j = i + 1; j < lines.length; j++) {
          if (!lines[j].startsWith(">")) break;
          var c = lines[j].replace(/^>\s?/, "");
          if (c) out.push(c);
        }
        if (out.join(" ").trim()) return out.join(" ").replace(/\s+/g, " ").trim();
      }
    }
    // 2) First "## " section: take the paragraph right after its heading.
    var m = text.match(/^##\s+[^\n]*\n+([^\n#]+)/m);
    if (m) return m[1].replace(/\s+/g, " ").trim();
    // 3) Leading text (first non-empty, non-heading line, capped).
    for (var k = 0; k < lines.length; k++) {
      var ln = lines[k].trim();
      if (ln && !/^#{1,6}\s/.test(ln) && !ln.startsWith(">")) {
        return ln.replace(/\s+/g, " ").trim().slice(0, 300);
      }
    }
    return "";
  }
  // Excerpt anchored at the "## 📋 Concrete Example" section if present
  // (that is where the substance lives), else the first "## " section, else
  // the start of the note.
  function answerExcerpt(entry) {
    var text = entry.text || "";
    var at = -1;
    var ex = text.search(/##\s+📋\s*Concrete Example/i);
    if (ex >= 0) at = ex;
    else { var h = text.search(/^##\s+/m); at = h >= 0 ? h : 0; }
    var out = text.slice(at, at + 340).replace(/\n{2,}/g, "\n").trim();
    return at > 0 ? "… " + out : out;
  }
  // Strip the leading "NN-" numeric prefix and dashes/spaces from a folder
  // slug to get a human domain key ("05-internet-web" -> "internet-web").
  function domainKey(folder) {
    var s = String(folder || "").toLowerCase().replace(/^\d+[-_]?/, "").replace(/[-_]/g, " ").trim();
    return s;
  }
  // Normalise a user-supplied domain/area/keyword to a lowercase, space-free
  // token ("Internet & Web" -> "internetweb").
  function normKey(v) {
    return String(v || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  // The top area ("agentic coding" / "hermes agent" / "package development")
  // from a note's folder slug (first segment).
  function areaOf(folder) {
    var f = String(folder || "").toLowerCase();
    return f.indexOf("/") >= 0 ? f.split("/")[0] : f;
  }

  // ------------------------------------------------------------------
  // SEARCH cluster — generic retrieval. Each result carries `id`;
  // read_note(id) then returns the FULL note text.
  // ------------------------------------------------------------------
  function searchCore(query, limit, folder, minTitleHits) {
    var q = normStr(query);
    var lim = Math.max(1, Math.min(parseInt(limit, 10) || 5, 10));
    if (!q || !knowledgeIndex) return { ok: false, count: 0, results: [], error: "search_notes needs a non-empty 'query' (e.g. \"agent memory\"). Retry with keywords, not an empty string." };
    var terms = q.toLowerCase().split(/[^a-z0-9\u4e00-\u9fff]+/).filter(Boolean);
    if (!terms.length) return { ok: false, count: 0, results: [], error: "No searchable words in that query. Retry with different keywords." };
    var topic = terms.slice().sort(function (a, b) { return b.length - a.length; })[0] || "";
    var scored = [];
    for (var i = 0; i < knowledgeIndex.length; i++) {
      var e = knowledgeIndex[i];
      if (folder && e.folder !== folder) continue;
      var combined = (e.title + " " + e.text).toLowerCase();
      var titleLower = e.title.toLowerCase();
      var score = 0, titleHits = 0;
      for (var t = 0; t < terms.length; t++) {
        var term = terms[t];
        if (combined.indexOf(term) < 0) continue;
        score += titleLower.indexOf(term) >= 0 ? 10 : 1;
        if (titleLower.indexOf(term) >= 0) titleHits++;
        score += Math.max(0, 5 - combined.indexOf(term) / 100);
      }
      if (topic.length >= 6 && titleLower.indexOf(topic) >= 0) score *= 2;
      if (minTitleHits && titleHits < minTitleHits) continue;
      if (score > 0) scored.push({ e: e, score: score, titleHits: titleHits });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var payload = {
      ok: true,
      count: scored.length,
      results: scored.slice(0, lim).map(function (s) {
        return {
          id: knowledgeIndex.indexOf(s.e),
          slug: s.e.slug,
          title: s.e.title,
          folder: s.e.folder,
          score: Math.round(s.score * 10) / 10,
          short_answer: shortAnswer(s.e),
          snippet: answerExcerpt(s.e)
        };
      })
    };
    // Shrink the result set ourselves so the JSON always fits the tool-result
    // budget intact: fewer complete results > broken JSON.
    var budget = (typeof TOOL_RESULT_MAX !== "undefined" ? TOOL_RESULT_MAX : 6000) - 200;
    var s = JSON.stringify(payload);
    while (s.length > budget && payload.results.length > 1) {
      payload.results.pop();
      s = JSON.stringify(payload);
    }
    if (payload.results.length < Math.min(lim, scored.length)) {
      payload.truncated = "Fewer results shown to fit the tool-result budget; the top-ranked ones are complete. Use read_note(id) for full text or re-search with a smaller limit.";
    }
    return payload;
  }

  tool({
    name: "search_notes",
    description: "Keyword-search all the concept notes across the three areas (Agentic Coding, Hermes Agent, Package Development). The MAIN lookup tool. Returns ranked results with a short answer/snippet for each — usually enough to answer directly; call read_note(id) for the full text. If the user asks about the CURRENT/THIS page, use read_current_page instead.",
    parameters: {
      type: "object",
      properties: {
        query: textParam(),
        limit: limitParam(),
        folder: strParam("Optional folder prefix to narrow the search, e.g. 'agentic coding/12-agent-fundamentals' (see list_folders)")
      },
      required: ["query"]
    },
    fn: function (a, ctx) {
      var r = searchCore(a.query, a.limit, normStr(a.folder), 0);
      r.hint = r.count ? "You have enough to answer. Use read_note(id) only if a result's snippet is insufficient." : "Try fewer/different keywords, or list_folders to find the right domain.";
      return r;
    }
  });

  tool({
    name: "search_exact",
    description: "Strict search: a note only matches if a keyword appears in its TITLE (or the whole note for multi-word phrases). Use when search_notes returns too many loosely related notes.",
    parameters: { type: "object", properties: { query: textParam(), limit: limitParam() }, required: ["query"] },
    fn: function (a) {
      var r = searchCore(a.query, a.limit, "", 1);
      r.note = "Only notes whose title contains at least one full keyword are shown; tighten keywords for stricter matching.";
      return r;
    }
  });

  tool({
    name: "find_notes_mentioning",
    description: "Find every note that mentions a specific term, concept, library or person (e.g. 'RAG', 'PyTorch', 'MCP'). Returns up to 10 matches with title + short answer.",
    parameters: { type: "object", properties: { term: strParam("The exact word/phrase to find in the notes"), limit: limitParam() }, required: ["term"] },
    fn: function (a) {
      var t = normStr(a.term);
      var lim = Math.max(1, Math.min(parseInt(a.limit, 10) || 10, 10));
      if (!t || !knowledgeIndex) return { ok: true, count: 0, results: [] };
      var tl = t.toLowerCase();
      var results = [];
      for (var i = 0; i < knowledgeIndex.length && results.length < lim; i++) {
        var e = knowledgeIndex[i];
        if ((e.title + " " + e.text).toLowerCase().indexOf(tl) >= 0) {
          results.push({ id: i, slug: e.slug, title: e.title, folder: e.folder, short_answer: shortAnswer(e) });
        }
      }
      return { ok: true, count: results.length, results: results };
    }
  });

  // ------------------------------------------------------------------
  // WEB cluster — best-effort internet lookup for topics the vault does NOT
  // cover (general CS / AI knowledge, latest libraries, industry news, code,
  // how-to questions). Runs ENTIRELY IN THE BROWSER against public,
  // key-less, CORS-open APIs (no proxy / server / API key needed):
  //   - Wikipedia (en + zh)      -> general concepts
  //   - Hacker News (Algolia)    -> industry news / discussion
  //   - GitHub search            -> repositories / code
  //   - Stack Exchange           -> how-to / debugging (stackoverflow + serverfault)
  //   - PyPI (pypi.org)          -> Python package versions / descriptions
  //   - npm registry             -> JS package versions / descriptions
  // Used ONLY after search_notes comes up empty — the vault is the source of
  // truth for concepts; the web is a fallback so the assistant never just
  // says "not in the notes."
  // ------------------------------------------------------------------
  function decodeWebSnippet(s) {
    return String(s || "")
      .replace(/<[^>]+>/g, "")
      .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
      .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      .replace(/\s+/g, " ").trim();
  }
  async function httpJson(url) {
    var res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }
  async function webWikipedia(lang, q, lim) {
    var url = "https://" + lang + ".wikipedia.org/w/api.php" +
      "?action=query&list=search&srsearch=" + encodeURIComponent(q) +
      "&srlimit=" + lim + "&format=json&origin=*";
    var d = await httpJson(url);
    var rows = (d && d.query && d.query.search) || [];
    return rows.map(function (r) {
      return {
        source: "Wikipedia",
        title: r.title,
        snippet: decodeWebSnippet(r.snippet),
        url: "https://" + lang + ".wikipedia.org/wiki/" + encodeURIComponent(r.title.replace(/ /g, "_"))
      };
    });
  }
  async function webHackerNews(q, lim) {
    var url = "https://hn.algolia.com/api/v1/search?query=" + encodeURIComponent(q) + "&hitsPerPage=" + lim;
    var d = await httpJson(url);
    return (d.hits || []).map(function (h) {
      var url = h.url || ("https://news.ycombinator.com/item?id=" + h.objectID);
      return { source: "Hacker News", title: h.title || ("HN item " + h.objectID), snippet: decodeWebSnippet(h.story_text || h.url || ""), url: url };
    });
  }
  async function webGithub(q, lim) {
    var url = "https://api.github.com/search/repositories?q=" + encodeURIComponent(q) + "&per_page=" + lim;
    var d = await httpJson(url);
    return (d.items || []).map(function (r) {
      return { source: "GitHub", title: r.full_name, snippet: decodeWebSnippet(r.description || ""), url: r.html_url, stars: r.stargazers_count };
    });
  }
  async function webStackExchange(q, lim) {
    var out = [];
    var sites = ["stackoverflow", "serverfault"];
    for (var i = 0; i < sites.length; i++) {
      var site = sites[i];
      var url = "https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=" +
        encodeURIComponent(q) + "&site=" + site + "&pagesize=" + lim;
      var d = await httpJson(url);
      out = out.concat((d.items || []).map(function (r) {
        return { source: site === "stackoverflow" ? "Stack Overflow" : "Server Fault", title: r.title, snippet: decodeWebSnippet(r.summary || ""), url: r.link };
      }));
      if (out.length >= lim * 2) break;
    }
    return out.slice(0, lim * 2);
  }
  async function webPypi(q, lim) {
    var qn = String(q).trim().toLowerCase().replace(/\s+/g, "");
    var cands = [qn];
    if (qn.indexOf("-") < 0 && qn.indexOf("_") < 0) cands.push(qn.replace(/(.{4})(.)/, "$1-$2"));
    var seen = {};
    var out = [];
    for (var i = 0; i < cands.length && out.length < lim; i++) {
      var name = cands[i];
      if (!name || seen[name]) continue;
      seen[name] = true;
      var d;
      try { d = await httpJson("https://pypi.org/pypi/" + encodeURIComponent(name) + "/json"); }
      catch (e) { continue; }
      var info = d.info || {};
      var urls = d.urls || [];
      var dl = urls.length ? (urls[0].url || "") : "";
      out.push({
        source: "PyPI",
        title: (info.name || name) + " " + (info.version ? "v" + info.version : ""),
        snippet: decodeWebSnippet(info.summary || info.description || "") + (dl ? " \u2014 " + dl : ""),
        url: info.project_url || "https://pypi.org/project/" + name
      });
    }
    return out;
  }
  async function webNpm(q, lim) {
    var qn = String(q).trim().toLowerCase().replace(/\s+/g, "");
    if (qn.indexOf("-") < 0 && qn.indexOf("_") < 0 && qn.length < 40) {
      var d;
      try { d = await httpJson("https://registry.npmjs.org/" + encodeURIComponent(qn)); }
      catch (e) { return []; }
      if (!d || !d["dist-tags"]) return [];
      var v = d["dist-tags"].latest || "";
      return [{ source: "npm", title: (d.name || qn) + (v ? " v" + v : ""), snippet: decodeWebSnippet(d.description || ""), url: d.homepage || ("https://www.npmjs.com/package/" + qn) }];
    }
    return [];
  }

  tool({
    name: "web_search",
    description: "Search the INTERNET for information the site's notes do NOT cover. Runs in the browser across Wikipedia, Hacker News (industry news), GitHub (repositories/code), Stack Overflow (how-to/debugging), PyPI (Python packages) and npm (JS packages) — no API key needed. KEEP THE QUERY SHORT AND NATURAL: one topic, 2-6 words (e.g. 'react server components', 'transformer attention', 'uv python package manager'). Do NOT join multiple topics with commas; if a question spans several topics, call web_search once per topic. Use as a FALLBACK when search_notes has no answer, so you can still give a best-effort answer. Cite the source titles; the site's own notes stay authoritative for the concepts they cover.",
    parameters: {
      type: "object",
      properties: {
        query: textParam("One short topic, 2-6 words, e.g. 'uv python package manager' or 'transformer attention mechanism'"),
        limit: limitParam()
      },
      required: ["query"]
    },
    fn: async function (a) {
      var q = normStr(a.query);
      var lim = Math.max(1, Math.min(parseInt(a.limit, 10) || 5, 8));
      if (!q) return { ok: false, error: "web_search needs a non-empty 'query' (2-6 words, one topic)." };
      var errors = [];
      // Run all sources concurrently; any single failure is tolerated.
      var groups = [
        webWikipedia("en", q, Math.max(2, Math.ceil(lim / 2))),
        webHackerNews(q, 3),
        webGithub(q, 3),
        webStackExchange(q, 3),
        webPypi(q, 2),
        webNpm(q, 1),
        webWikipedia("zh", q, 2)
      ];
      var labels = ["wikipedia-en", "hacker-news", "github", "stackexchange", "pypi", "npm", "wikipedia-zh"];
      var settled = await Promise.all(groups.map(function (p, i) {
        return p.then(
          function (rows) { return { ok: true, rows: rows, label: labels[i] }; },
          function (e) { return { ok: false, err: (e && e.message ? e.message : e), label: labels[i] }; }
        );
      }));
      var results = [];
      for (var i = 0; i < settled.length; i++) {
        if (settled[i].ok) results = results.concat(settled[i].rows || []);
        else errors.push(settled[i].label + ": " + settled[i].err);
      }
      // De-dupe by (source+title), then interleave across sources so the
      // result set is diverse (Wikipedia, HN, GitHub, Stack, PyPI...) rather
      // than dominated by one.
      var seen = {}, bySource = {};
      for (var r = 0; r < results.length; r++) {
        var it = results[r];
        if (!it || !it.snippet && !it.url) continue;
        var k = it.source + "|" + it.title;
        if (seen[k]) continue;
        seen[k] = true;
        (bySource[it.source] = bySource[it.source] || []).push(it);
      }
      var out = [];
      var keys = Object.keys(bySource);
      var idx = {};
      for (var kk = 0; kk < keys.length; kk++) idx[keys[kk]] = 0;
      while (out.length < lim) {
        var progressed = false;
        for (var k2 = 0; k2 < keys.length && out.length < lim; k2++) {
          var arr = bySource[keys[k2]];
          if (idx[keys[k2]] < arr.length) { out.push(arr[idx[keys[k2]]++]); progressed = true; }
        }
        if (!progressed) break;
      }
      if (!out.length) {
        return {
          ok: false,
          error: "No web results (sources unreachable or no matches)." + (errors.length ? " (" + errors.join("; ") + ")" : ""),
          hint: "Retry with a shorter, more specific query (2-6 words, one topic). If the internet is blocked in the user's browser, fall back to answering from the site notes or say you could not verify."
        };
      }
      return {
        ok: true,
        count: out.length,
        sources: keys,
        results: out,
        caveat: "General web knowledge (Wikipedia / Hacker News / GitHub / Stack Overflow / PyPI / npm). Cite the source title(s); for the concepts this vault covers, the site notes are authoritative."
      };
    }
  });

  tool({
    name: "list_folders",
    description: "List the site's note domains (folders) with note counts — the three areas and their per-domain subfolders. Use to discover what topics exist before searching, or when a search returns nothing.",
    parameters: { type: "object", properties: {}, required: [] },
    fn: function () {
      if (!knowledgeIndex) return { ok: false, error: "index not loaded" };
      var counts = {};
      for (var i = 0; i < knowledgeIndex.length; i++) {
        var f = knowledgeIndex[i].folder || "(root)";
        counts[f] = (counts[f] || 0) + 1;
      }
      var out = Object.keys(counts).sort().map(function (f) { return { folder: f, domain: domainKey(f), notes: counts[f] }; });
      return { ok: true, sections: out };
    }
  });

  tool({
    name: "list_notes",
    description: "List note titles (with ids and slugs) in a domain folder or matching a title keyword. Cheap way to browse a section (e.g. all notes in 12-agent-fundamentals, or every note titled with 'memory') without reading their content.",
    parameters: {
      type: "object",
      properties: {
        folder: strParam("Folder prefix, e.g. 'agentic coding/03-algorithms'"),
        title_contains: strParam("Only titles containing this text (case-insensitive)"),
        limit: limitParam()
      },
      required: []
    },
    fn: function (a) {
      var f = normStr(a.folder), tc = normStr(a.title_contains).toLowerCase();
      var lim = Math.max(1, Math.min(parseInt(a.limit, 10) || 25, 50));
      var out = [];
      for (var i = 0; i < (knowledgeIndex || []).length; i++) {
        var e = knowledgeIndex[i];
        if (f && e.folder !== f) continue;
        if (tc && e.title.toLowerCase().indexOf(tc) < 0) continue;
        out.push({ id: i, slug: e.slug, title: e.title, folder: e.folder });
        if (out.length >= lim) break;
      }
      return { ok: true, count: out.length, notes: out, hint: "Use read_note(id) to read the full text of any listed note." };
    }
  });

  tool({
    name: "read_note",
    description: "Return the full text of one note by the id (or slug) from search_notes / list_notes / find_notes_mentioning. Use when the returned snippet is not enough to answer accurately — this is how you get the complete concrete example, analogy and details. For a LONG note, pass offset to read the part you have not seen yet (the result's next_offset tells you where to continue), or section to jump straight to a heading (e.g. 'Concrete Example', 'Analogy', 'Related').",
    parameters: {
      type: "object",
      properties: {
        id: intParam("Note id from a search/list result"),
        slug: strParam("Or the note slug"),
        offset: intParam("Character position to start from (default 0). Use the previous result's next_offset to continue."),
        max_chars: intParam("Max characters to return (default 2200, max 6000)"),
        section: strParam("Optional: start at the heading containing this text (e.g. 'Concrete Example', 'Analogy')")
      },
      required: []
    },
    fn: function (a, ctx) {
      var e = null;
      if (a.id != null) e = entryByIdx(parseInt(a.id, 10));
      else if (normStr(a.slug)) { for (var i = 0; i < (knowledgeIndex || []).length; i++) if (knowledgeIndex[i].slug === normStr(a.slug)) { e = knowledgeIndex[i]; break; } }
      if (!e) return { ok: false, error: "No note with that id/slug. Call search_notes or list_notes first." };
      var text = e.text || "";
      var off = Math.max(0, parseInt(a.offset, 10) || 0);
      var max = Math.min(parseInt(a.max_chars, 10) || 2200, 6000);
      if (a.section) {
        var term = String(a.section).toLowerCase();
        var headingRe = /^#{2,6}\s+[^\n]*$/gm;
        var hm, bestAt = -1;
        while ((hm = headingRe.exec(text))) {
          if (hm[0].toLowerCase().indexOf(term) >= 0) { bestAt = hm.index; break; }
        }
        if (bestAt >= 0) off = bestAt;
      }
      if (off > text.length) off = text.length;
      var slice = text.slice(off, off + max);
      var nextOffset = off + slice.length;
      var out = { ok: true, id: knowledgeIndex.indexOf(e), slug: e.slug, title: e.title, text: slice };
      if (nextOffset < text.length) {
        out.truncated = true;
        out.next_offset = nextOffset;
        out.total_chars = text.length;
        out.more = "Note continues — call read_note again with offset=" + nextOffset + " (or a smaller max_chars) to read the rest.";
      }
      return out;
    }
  });

  // ------------------------------------------------------------------
  // DOMAIN cluster — structured navigation over the three areas and their
  // per-domain subfolders. Each domain has an MOC note (a map of its concepts
  // with [[links]]); the MOC is the best way to get an at-a-glance overview.
  // ------------------------------------------------------------------
  function packNote(e, chars) {
    return { ok: true, id: knowledgeIndex.indexOf(e), slug: e.slug, title: e.title, short_answer: shortAnswer(e), summary: (e.text || "").slice(0, chars || 1000), more: "read_note(id) for the full text." };
  }

  tool({
    name: "list_areas",
    description: "List the three top-level areas of the vault (Agentic Coding, Hermes Agent, Package Development) with their note counts. Use to orient the user on what the vault covers.",
    parameters: { type: "object", properties: {}, required: [] },
    fn: function () {
      if (!knowledgeIndex) return { ok: false, error: "index not loaded" };
      var counts = {};
      for (var i = 0; i < knowledgeIndex.length; i++) {
        var a = areaOf(knowledgeIndex[i].folder) || "(root)";
        counts[a] = (counts[a] || 0) + 1;
      }
      var out = Object.keys(counts).sort().map(function (a) { return { area: a, notes: counts[a] }; });
      return { ok: true, areas: out };
    }
  });

  // Resolve a user-supplied area/domain string to a folder prefix, by
  // matching against the real folders in the index (case/space/number-insensitive).
  function matchFolder(prefix) {
    if (!knowledgeIndex) return null;
    var folders = {};
    for (var i = 0; i < knowledgeIndex.length; i++) {
      var f = knowledgeIndex[i].folder || "";
      if (f) folders[f] = true;
    }
    var want = normKey(prefix);
    if (!want) return null;
    var all = Object.keys(folders);
    for (var k = 0; k < all.length; k++) {
      if (normKey(all[k]) === want) return all[k];
    }
    var cands = [];
    for (var j = 0; j < all.length; j++) {
      var fk = normKey(all[j]);
      if (fk.indexOf(want) === 0 || want.indexOf(fk) === 0) cands.push(all[j]);
    }
    if (cands.length) {
      cands.sort(function (a, b) { return a.length - b.length; });
      return cands[0];
    }
    return null;
  }

  tool({
    name: "list_domains",
    description: "List the domains (subfolders) of one area — e.g. all of 'agentic coding' (programming, data-structures, algorithms, ai-fundamentals, ...) — with note counts. Pass an area name; to list ALL domains across the vault, pass empty.",
    parameters: {
      type: "object",
      properties: {
        area: strParam("Area name, e.g. 'agentic coding', 'hermes agent', 'package development'; empty = all areas")
      },
      required: []
    },
    fn: function (a) {
      if (!knowledgeIndex) return { ok: false, error: "index not loaded" };
      var areaKey = normStr(a.area);
      var wantArea = areaKey ? normKey(areaKey) : "";
      var pinned = areaKey ? matchFolder(areaKey) : null;
      var counts = {}, areas = {};
      for (var i = 0; i < knowledgeIndex.length; i++) {
        var e = knowledgeIndex[i];
        var f = e.folder || "(root)";
        if (pinned) { if (f !== pinned) continue; }
        else if (wantArea) { if (normKey(areaOf(f)).indexOf(wantArea) !== 0 && normKey(f).indexOf(wantArea) !== 0) continue; }
        counts[f] = (counts[f] || 0) + 1;
        if (!areas[f]) areas[f] = areaOf(f);
      }
      var out = Object.keys(counts).sort().map(function (f) {
        return { folder: f, area: areas[f], domain: domainKey(f), notes: counts[f] };
      });
      return { ok: true, count: out.length, domains: out, hint: "Use read_note(id) via list_notes(folder=...) or get_domain_overview(domain=...) to drill into one." };
    }
  });

  tool({
    name: "get_domain_overview",
    description: "Get the overview (MOC) note for a domain — its map of concepts and their [[links]]. The fastest way to see what a domain covers at a glance. Pass the domain name or folder, e.g. 'agent-fundamentals', '12-agent-fundamentals', or 'agentic coding/12-agent-fundamentals'.",
    parameters: {
      type: "object",
      properties: {
        domain: strParam("Domain name or folder, e.g. 'agent-fundamentals' or 'agentic coding/12-agent-fundamentals'")
      },
      required: ["domain"]
    },
    fn: function (a) {
      if (!knowledgeIndex) return { ok: false, error: "index not loaded" };
      var f = matchFolder(a.domain);
      if (!f) return { ok: false, error: "No domain matches '" + normStr(a.domain) + "'. Use list_domains to see the exact domain names." };
      var moc = null, first = null;
      for (var i = 0; i < knowledgeIndex.length; i++) {
        var e = knowledgeIndex[i];
        if (e.folder !== f) continue;
        if (!first) first = e;
        if (e.slug.indexOf("moc") >= 0 || /MOC/i.test(e.title)) { moc = e; break; }
      }
      var target = moc || first;
      if (!target) return { ok: false, error: "No notes found in domain '" + f + "'." };
      var r = packNote(target, 1400);
      r.folder = f;
      r.domain = domainKey(f);
      r.is_moc = !!moc;
      r.more = (moc ? "" : "No MOC found; showing a sample note. ") + "List its notes with list_notes(folder='" + f + "') or read them with read_note(id).";
      return r;
    }
  });

  tool({
    name: "list_all_notes",
    description: "List ALL note titles in the vault (paginated by limit). Use to answer 'what can this assistant tell me about / what topics exist' or to find a note when other searches fail.",
    parameters: { type: "object", properties: { limit: limitParam(), offset: intParam("Start position (for paging, default 0)") }, required: [] },
    fn: function (a) {
      var lim = Math.max(1, Math.min(parseInt(a.limit, 10) || 30, 100));
      var off = Math.max(0, parseInt(a.offset, 10) || 0);
      var out = [];
      for (var i = off; i < (knowledgeIndex || []).length && out.length < lim; i++) {
        var e = knowledgeIndex[i];
        out.push({ id: i, title: e.title, folder: e.folder });
      }
      return { ok: true, total: (knowledgeIndex || []).length, count: out.length, offset: off, notes: out };
    }
  });

  tool({
    name: "get_related_notes",
    description: "Get notes related to the CURRENT page (or a given topic): same domain, and shared keywords. Use for 'what else should I read / related topics to this page'.",
    parameters: { type: "object", properties: { topic: strParam("Optional topic to relate to; default = current page"), limit: limitParam() }, required: [] },
    fn: function (a) {
      var topic = normStr(a.topic);
      if (!topic) { topic = (document.title || ""); }
      if (!topic) return { ok: false, error: "No topic given and no current page." };
      var tl = topic.toLowerCase();
      var currentDomain = null;
      for (var c = 0; c < (knowledgeIndex || []).length; c++) {
        if (knowledgeIndex[c].title.toLowerCase() === tl) { currentDomain = knowledgeIndex[c].folder; break; }
      }
      var out = [];
      for (var i = 0; i < (knowledgeIndex || []).length; i++) {
        var e = knowledgeIndex[i];
        if (e.title.toLowerCase() === tl) continue;
        var score = 0;
        if (currentDomain && e.folder === currentDomain) score += 5;
        var words = tl.split(/\s+/).filter(function (w) { return w.length > 3; });
        for (var w = 0; w < words.length; w++) {
          if (e.title.toLowerCase().indexOf(words[w]) >= 0) score += 3;
          if ((e.text || "").toLowerCase().indexOf(words[w]) >= 0) score += 1;
        }
        if (score >= 2) out.push({ id: i, slug: e.slug, title: e.title, folder: e.folder, score: score });
      }
      out.sort(function (x, y) { return y.score - x.score; });
      return { ok: true, count: out.length, related: out.slice(0, parseInt(a.limit, 10) || 6) };
    }
  });

  // ------------------------------------------------------------------
  // PYTHON cluster — Pyodide (CPython compiled to WebAssembly) so the
  // agent can compute over the notes data (or anything) with real Python.
  // The current knowledge index is exposed to Python as `knowledge`
  // (a list of dicts: slug, title, folder, text). Built-in packages
  // (numpy, pandas, matplotlib, scipy, sympy, ...) load via loadPackage;
  // anything else via micropip. First use downloads the runtime (~10MB)
  // once; afterwards it is cached in the browser.
  // ------------------------------------------------------------------
  var PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.mjs";
  var pyodideState = { mod: null, inst: null, loading: null, ready: false, err: null };

  function pyLoadPackage(pyodide, name) {
    return pyodide.loadPackage(name).then(
      function () { return { pkg: name, ok: true, via: "built-in" }; },
      function () {
        return pyodide.loadPackage("micropip").then(function () {
          return pyodide.runPythonAsync("import micropip; await micropip.install('" + String(name).replace(/'/g, "") + "')");
        }).then(function () { return { pkg: name, ok: true, via: "micropip" }; });
      }
    );
  }

  async function ensurePyodide() {
    if (pyodideState.ready) return pyodideState.inst;
    if (pyodideState.err) throw new Error(pyodideState.err);
    if (pyodideState.loading) return pyodideState.loading;
    pyodideState.loading = (async function () {
      try {
        if (!pyodideState.mod) {
          pyodideState.mod = await import(PYODIDE_URL);
        }
        var pyodide = await pyodideState.mod.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/"
        });
        pyodideState.inst = pyodide;
        pyodideState.ready = true;
        return pyodide;
      } catch (e) {
        pyodideState.err = "Pyodide failed to load: " + (e && e.message ? e.message : e);
        pyodideState.loading = null;
        throw new Error(pyodideState.err);
      }
    })();
    return pyodideState.loading;
  }

  tool({
    name: "run_python",
    description: "Run Python code (via Pyodide/WebAssembly, in the browser) to compute or extract anything from the notes data or do math. The current knowledge index is available as `knowledge` — a list of dicts with keys slug, title, folder, text. Built-in packages numpy/pandas/matplotlib/scipy/sympy are preinstalled on demand; pass `packages` to load more (e.g. 'pandas', 'qrcode'). Print your answer with print(). Use this for aggregations, comparisons, rankings, or any analysis the other tools can't express. You can also GENERATE IMAGES (e.g. QR codes with the 'qrcode' package, charts with matplotlib): encode them as a base64 PNG and print `data:image/png;base64,....` — the chat renders it inline as a picture. The code must not try to use the network or filesystem.",
    parameters: {
      type: "object",
      properties: {
        code: strParam("Python code to run. `knowledge` holds the notes. End with print() of the result you want."),
        packages: strArrParam("Optional extra Python packages to install first, e.g. ['pandas']")
      },
      required: ["code"]
    },
    fn: async function (a, ctx) {
      var code = String((a && a.code) || "").trim();
      if (!code) return { ok: false, error: "code is required" };
      var pkgs = normList(a && a.packages);
      var t0 = Date.now();
      var pyodide;
      try {
        pyodide = await ensurePyodide();
      } catch (e) {
        return { ok: false, error: String(e.message || e), hint: "Pyodide needs a network fetch on first use; check connectivity and retry." };
      }
      try {
        for (var i = 0; i < pkgs.length; i++) {
          var r = await pyLoadPackage(pyodide, pkgs[i]);
          if (!r.ok) return { ok: false, error: "Failed to install package " + pkgs[i] };
        }
        var data = (knowledgeIndex || []).map(function (e) {
          return { slug: e.slug, title: e.title, folder: e.folder, text: (e.text || "").slice(0, 1200) };
        });
        var n = (knowledgeIndex || []).length;
        var pyKnowledge = null;
        try { pyKnowledge = pyodide.toPy(data); }
        catch (e) { pyKnowledge = data; }
        pyodide.globals.set("knowledge", pyKnowledge);
        pyodide.globals.set("knowledge_count", n);
        var out = "";
        pyodide.setStdout({ batched: function (s) { out += s + "\n"; } });
        var ret = null;
        try {
          ret = await pyodide.runPythonAsync(code);
        } catch (pe) {
          return { ok: false, error: "Python error: " + String(pe.message || pe), stdout: out.slice(0, 4000) };
        }
        var retStr = "";
        try { retStr = (ret != null) ? String(ret) : ""; } catch (e) { retStr = ""; }
        if (retStr && !out) out = retStr;
        return {
          ok: true,
          stdout: out.slice(0, 6000),
          truncated: out.length > 6000,
          notes_available: n,
          ms: Date.now() - t0
        };
      } catch (e) {
        return { ok: false, error: "Python run failed: " + (e && e.message ? e.message : e) };
      }
    }
  });

  tool({
    name: "python_packages_available",
    description: "List the Python packages already available to run_python without extra install (Pyodide built-ins) and note that anything else can be pip-installed on demand. Use to decide whether to pass `packages` to run_python.",
    parameters: { type: "object", properties: {}, required: [] },
    fn: function () {
      return {
        ok: true,
        builtin: ["numpy", "pandas", "matplotlib", "scipy", "sympy", "Pillow", "requests", "sqlite3", "lxml"],
        note: "These are Pyodide's bundled packages (loaded on first use). Any other PyPI package can be installed at runtime by passing it in run_python's `packages` (via micropip) — e.g. ['scikit-learn', 'beautifulsoup4']. Pure-Python packages work best; some compiled ones may not have a Pyodide build."
      };
    }
  });
