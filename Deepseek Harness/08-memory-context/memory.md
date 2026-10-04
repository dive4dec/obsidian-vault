---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Memory

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

What an agent retains across turns and sessions. In dsh this is the durable session log plus the projections and spills derived from it: older history can be condensed into a summary that the model treats as always present, and oversized content is spilled to disk with a locator so it stays retrievable. `dsh-session-projection` lets clients read current per-session state without replaying the raw log.

## Concrete Example

`dsh-compaction` keeps condensed content in the session log so that replaying a session deterministically reproduces the same condensed conversation; `dsh-spill` lets a tool save oversized text and get back an opaque locator and byte count.

## Analogy

A long-running notebook: the current page is the active context, older pages are summarized in an index, and big attachments are clipped in a tab you can flip back to.

## Related Concepts

- [[context|Context]]
- [[history|Message History]]
- [[spill|Spill]]
- [[context-projection|Context Projection]]
