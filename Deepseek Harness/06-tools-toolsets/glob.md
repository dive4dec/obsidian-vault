---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Glob Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The glob tool, from dsh-tool-fs-search, finds files whose paths match a glob pattern, including hidden and ignored files but excluding VCS metadata, in modification-time order. A pattern with no / matches basenames at any depth, so * matches the whole tree. Results are capped; with a spill store the complete sorted list stays recoverable.

## Concrete Example

glob pattern="src/**/*.ts" returns matching files newest-first; the config flag sampleOverCapGlobResults chooses the over-cap ordering contract.

## Analogy

Typing * in a file manager to list what exists.

## Related Concepts

- [[grep|Grep Tool]]
- [[fs-search-tool|FS Search Tool]]
- [[search-tools|Search Tools]]
- [[spilling|Spill]]
