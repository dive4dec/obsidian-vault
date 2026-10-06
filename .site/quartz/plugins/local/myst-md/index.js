/**
 * myst-md — local Quartz plugin: render Jupyter-Book / MyST `:::` directive
 * blocks (:::{card}, :::{grid}, :::{iframe}, plus a generic fallback) that
 * this Quartz 5 build otherwise leaves as literal text (e.g. `:::{card}`
 * showing up verbatim on the rendered page).
 *
 * Why local: the @quartz-community registry has no myst-md package, and the
 * rest of the site config uses local plugins (note-dates, heading-ids) for
 * build-specific needs.
 *
 * How: a single left-to-right pass over the mdast root (after remark-parse),
 * using a stack so nested directives (cards inside a grid) resolve innermost
 * first. Directive delimiters become plain paragraphs at parse time, so we:
 *   - detect a start paragraph whose first segment matches `:::{name} args`
 *     (3+ colons); field lines like `:header: ...` may be in the SAME
 *     paragraph (soft-broken lines) or in following standalone paragraphs
 *   - collect sibling nodes as the body until a closing `:::` segment with
 *     the SAME colon count (it may trail the last body/header line in the
 *     same paragraph)
 *   - replace the span with: raw-HTML wrapper nodes + the original mdast
 *     nodes (bodies pass through untouched, so raw <video>/<img> HTML and
 *     links/footnotes in `:header:` lines keep their inline markdown
 *     parsing and render natively)
 *
 * A small scoped <style> is injected once per page that uses directives
 * (grid / card / iframe layout), using Quartz theme CSS variables.
 *
 * Imported by the config loader (plain Node ESM): dependency-free, no TS.
 */

const START_RE = /^(:{3,})\s*(?:\{([A-Za-z][\w-]*)\})?\s*(.*)$/
const CLOSE_RE = /^(:{3,})\s*$/
const FIELD_KEY_RE = /^:([A-Za-z][\w-]*)(?::\s*|\s+|$)/
const FIELD_PREFIX_RE = /^:([A-Za-z][\w-]*)(?::\s*|\s+)/

const STYLE = `<style>
.myst-grid{display:grid;gap:1rem;margin:1rem 0}
.myst-card{border:1px solid var(--lightgray);border-radius:.5rem;overflow:hidden}
.myst-card-header{padding:.65rem 1rem;font-weight:600;border-bottom:1px solid var(--lightgray);background:var(--lightgray)}
.myst-card-body{padding:.9rem 1rem;display:flex;flex-direction:column;gap:.8rem}
.myst-card-body>video,.myst-card-body>img,.myst-card-body>p{margin:0}
.myst-iframe{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden}
.myst-iframe iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.myst-twocol{display:flex;gap:1.25rem;margin:0;align-items:center}
.myst-column{flex:1 1 0;min-width:0;display:flex;flex-direction:column;gap:.6rem}
.myst-column>video,.myst-column>img,.myst-column>p,.myst-column>a{margin:0;width:100%}
.myst-column>video{border-radius:.375rem}
.myst-column>a>img{width:100%;height:auto;border-radius:.375rem;display:block}
.myst-col-caption{font-size:.85rem;color:var(--darkgray);text-align:center}
@media (max-width:800px){.myst-twocol{flex-direction:column}.myst-column{width:100%}}
.myst-directive{margin:1rem 0}
</style>`

const html = (value) => ({ type: "html", value })

function isPara(node) {
  return !!node && node.type === "paragraph"
}

/**
 * Split a paragraph into line segments. remark-parse keeps soft line breaks
 * as "\n" INSIDE text node values, so split on those; real `break` nodes
 * (hard breaks) are also treated as line boundaries.
 * Each segment: { nodes: [...inline nodes], text: string|null }
 */
function segments(para) {
  const segs = []
  let cur = []
  const flush = () => {
    if (cur.length) segs.push(cur)
    cur = []
  }
  for (const c of para.children) {
    if (c.type === "break") {
      flush()
      continue
    }
    if (c.type === "text" && c.value.includes("\n")) {
      const parts = c.value.split("\n")
      for (let i = 0; i < parts.length; i++) {
        if (i > 0) flush()
        if (parts[i]) cur.push({ type: "text", value: parts[i] })
      }
      continue
    }
    cur.push(c)
  }
  flush()
  return segs
}

function segText(seg) {
  const t = seg && seg[0]
  return t && t.type === "text" ? t.value : null
}

/** Inlines of a field line after the `:key:` prefix; null if not a field. */
function fieldInlines(seg) {
  const t = segText(seg)
  if (!t) return null
  const m = t.match(FIELD_PREFIX_RE)
  if (!m) return null
  const nodes = seg.slice(1)
  const rest = t.slice(m[0].length)
  if (rest) nodes.unshift({ type: "text", value: rest })
  return nodes
}

function segIsField(seg) {
  const t = segText(seg)
  return !!(t && t.match(FIELD_KEY_RE))
}

const para = (seg) => ({ type: "paragraph", children: seg })

/** Classify a line: "close" | "start" | "field" | null. */
function classify(t) {
  if (t == null) return null
  if (CLOSE_RE.test(t)) return "close"
  const m = t.match(START_RE)
  if (m && (m[2] || (m[3] || "").trim())) return "start"
  if (t.match(FIELD_KEY_RE)) return "field"
  return null
}

function isDirectiveRelevant(para) {
  for (const seg of segments(para)) {
    const c = classify(segText(seg))
    if (c === "start" || c === "close") return true
  }
  return false
}

/**
 * Flatten the root's children into a stream of items. Only paragraphs that
 * actually contain a directive start/close line are split into line segments
 * (soft breaks are "\n" inside text values); other paragraphs and all
 * non-paragraph nodes pass through untouched. The parser walks this stream,
 * so a nested directive may start in the same soft-broken block as the outer
 * directive's header line.
 */
function flattenItems(tree) {
  const items = []
  for (const node of tree.children) {
    if (isPara(node) && isDirectiveRelevant(node)) {
      for (const seg of segments(node)) {
        if (seg.length) items.push({ kind: "seg", seg })
      }
    } else {
      items.push({ kind: "node", node })
    }
  }
  return items
}

function textOf(inlines) {
  const walk = (nodes) =>
    (nodes || [])
      .map((n) => {
        if (n.type === "text") return n.value
        if (n.type === "inlineCode") return n.value
        // Links: take the inner text (e.g. package names in card headers).
        if (n.type === "link" && Array.isArray(n.children)) return walk(n.children)
        // Footnote refs, emphasis wrappers, etc.: skip or recurse.
        if (n.type === "sup") return ""
        if (n.children) return walk(n.children)
        return ""
      })
      .join("")
  return walk(inlines)
}

function render(d) {
  switch (d.name) {
    case "grid": {
      const cols = (d.args.match(/\d+/g) || []).length || 1
      return [
        html(`<div class="myst-grid" style="grid-template-columns:repeat(${cols},1fr)">`),
        ...d.body,
        html(`</div>`),
      ]
    }
    case "card": {
      const header = d.fields.header || []
      const title = textOf(header).trim()
      return [
        html(`<div class="myst-card"${title ? ` data-title="${esc(title)}"` : ""}>`),
        html(`<div class="myst-card-header">`),
        ...header,
        html(`</div>`),
        html(`<div class="myst-card-body">`),
        ...d.body,
        html(`</div></div>`),
      ]
    }
    case "twocol":
      return [html(`<div class="myst-twocol">`), ...d.body, html(`</div>`)]
    case "column":
      return [html(`<div class="myst-column">`), ...d.body, html(`</div>`)]
    case "iframe": {
      const url = d.args
      if (!url) return [...d.body]
      const width = (textOf(d.fields.width) || "100%").trim()
      return [html(`<div class="myst-iframe"><iframe src="${esc(url)}" style="width:${esc(width)}" loading="lazy"></iframe></div>`)]
    }
    default: {
      // Generic fallback: container div, fields rendered as paragraphs, then body.
      const fieldNodes = Object.entries(d.fields).map(([k, inl]) => ({
        type: "paragraph",
        children: [{ type: "text", value: k + ": " }, ...inl],
      }))
      return [
        html(`<div class="myst-directive myst-${esc(d.name || "generic")}" data-directive="${esc(d.name || "")}">`),
        ...fieldNodes,
        ...d.body,
        html(`</div>`),
      ]
    }
  }
}

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

export default function MystMd(_opts) {
  return {
    name: "MystMd",
    markdownPlugins() {
      return [
        () => (tree) => {
          if (!tree || !Array.isArray(tree.children)) return
          const out = []
          const stack = []
          let used = false

          // Route a closed directive's rendered nodes to the right place:
          // into the innermost open parent's body, or to the top level.
          const emit = (d) => {
            const nodes = render(d)
            if (stack.length) stack[stack.length - 1].body.push(...nodes)
            else out.push(...nodes)
            used = true
          }

          // Consume a field line into the innermost open directive.
          const takeField = (seg) => {
            const d = stack[stack.length - 1]
            const inl = fieldInlines(seg)
            if (inl) {
              const key = (segText(seg).match(FIELD_KEY_RE) || [])[1]
              d.fields[key] = inl
            }
          }

          // Body content: push the item into the innermost open directive,
          // or to the top level.
          const takeBody = (item) => {
            if (stack.length) {
              const d = stack[stack.length - 1]
              d.body.push(item.kind === "seg" ? para(item.seg) : item.node)
            } else {
              out.push(item.kind === "seg" ? para(item.seg) : item.node)
            }
          }

          for (const item of flattenItems(tree)) {
            const seg = item.kind === "seg" ? item.seg : null
            const t = seg ? segText(seg) : null
            const kind = t ? classify(t) : null

            // Closing delimiter: pop and render the innermost directive.
            if (kind === "close") {
              if (stack.length) {
                const d = stack.pop()
                emit(d)
              }
              continue
            }

            if (kind === "start") {
              const m = t.match(START_RE)
              const d = {
                name: m[2] || null,
                args: (m[3] || "").trim(),
                fields: {},
                body: [],
              }
              stack.push(d)
              continue
            }

            if (kind === "field" && stack.length && stack[stack.length - 1].body.length === 0) {
              takeField(seg)
              continue
            }

            takeBody(item)
          }

          // Unbalanced: re-emit the raw body so nothing is lost.
          for (const d of stack) out.push(...d.body)

          if (used) tree.children = [html(STYLE), ...out]
        },
      ]
    },
  }
}
