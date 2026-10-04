#!/usr/bin/env python3
"""Post-build link repair for the Quartz `public/` output.

Quartz's `markdownLinkResolution: shortest` resolves a wikilink like
[[tool-calling]] to a relative href ONLY when that note name is unique in the
vault. When the same basename exists in more than one folder (common in this
vault: tool-calling, agent-loop, ...), it falls back to a ROOT-relative path
(e.g. `../../tool-calling`) that does not exist -> broken link.

This pass walks the built HTML and re-anchors each BROKEN internal link to:
  1. the same folder as the page (the most common author intent), else
  2. the unique vault-wide match for that basename, else
  left as-is (genuinely ambiguous or missing).
Anchors (#...) and external/absolute URLs are preserved.

Usage: python3 fix_links.py [public_dir]   (defaults to ./public)
"""
import os, re, sys
from collections import defaultdict

A_RE = re.compile(r'(<a\b[^>]*?href=")([^"]*)("[^>]*>)', re.I)


def main():
    pub = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "public")
    if not os.path.isdir(pub):
        print("fix_links: not a directory:", pub); sys.exit(2)

    page_files = []
    for root, _dirs, files in os.walk(pub):
        for fn in files:
            if fn.endswith(".html"):
                page_files.append(os.path.relpath(os.path.join(root, fn), pub))

    # Every resolvable target (pub-relative path, no anchor). A page at
    # "a/b/note.html" is reachable as "a/b/note" and "a/b/note.html".
    targets = set()
    by_basename = defaultdict(set)
    for rel in page_files:
        stem = rel[:-5]                                   # drop .html
        targets.add(stem)
        targets.add(stem + ".html")
        by_basename[os.path.basename(stem)].add(stem)

    def resolves(target):
        return os.path.normpath(target) in targets

    fixed = broken = still = 0
    for rel in page_files:
        pf = os.path.join(pub, rel)
        html = open(pf, encoding="utf-8").read()
        d = os.path.dirname(rel)                           # page's folder (pub-rel)
        changed = False

        def repl(m):
            nonlocal fixed, broken, still, changed
            pre, href, post = m.group(1), m.group(2), m.group(3)
            if not href or href.startswith("#"):
                return m.group(0)
            if "://" in href or href.startswith(("mailto:", "data:", "//")):
                return m.group(0)
            pathpart, anchor = (href.split("#", 1) + [""])[:2]
            if not pathpart:
                return m.group(0)
            if resolves(os.path.join(d, pathpart)):
                return m.group(0)                          # already fine
            broken += 1
            base = os.path.basename(pathpart)
            newpath = None
            if resolves(os.path.join(d, base)):            # 1) same folder
                newpath = base
            else:                                          # 2) unique vault match
                cands = by_basename.get(base)
                if cands and len(cands) == 1:
                    cand = next(iter(cands))
                    newpath = os.path.relpath(cand, d)
            if newpath is None:
                still += 1
                return m.group(0)
            fixed += 1
            changed = True
            return pre + newpath + (("#" + anchor) if anchor else "") + post

        if A_RE.search(html):
            newhtml = A_RE.sub(repl, html)
            if changed:
                open(pf, "w", encoding="utf-8").write(newhtml)

    print(f"fix_links: {len(page_files)} pages | broken found: {broken} | "
          f"repaired: {fixed} | still broken: {still}")


if __name__ == "__main__":
    main()
