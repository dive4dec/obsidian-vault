---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# FS Search Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-fs-search gives models glob file discovery and grep content search over a local workspace, needing no host rg installation and including hidden and ignored files while excluding VCS metadata. Results are workdir-relative and bounded by configurable caps; with an optional spill store, capped results remain fully recoverable. sampleOverCapGlobResults is a required config with no fallback.

## Concrete Example

glob takes pattern and path? and returns modification-time-ordered files; grep returns matches as Line N: <preview> grouped by file.

## Analogy

The agent's eyes for finding files and lines without opening everything.

## Related Concepts

- [[glob|Glob Tool]]
- [[grep|Grep Tool]]
- [[fs-tool|Filesystem Tool]]
- [[search-tools|Search Tools]]
