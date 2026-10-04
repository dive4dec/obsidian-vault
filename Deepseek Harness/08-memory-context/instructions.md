---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Instructions

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Workspace guidance injected into context from `AGENTS.md`-compatible files. `dsh-agent-instructions` loads the applicable chain — the user-global `$DSH_HOME/AGENTS.md` followed by the project chain from root down to the working directory — into one durable baseline message on the first request, bounded by a byte budget. `dsh-base` enables it by default.

## Concrete Example

With the default 65,536-byte `maxBytes`, broader files are omitted before the most specific file is truncated; after a `read`, `write`, or `edit` reaches a deeper directory, the next request includes the newly applicable instruction file, and a duplicate `CLAUDE.md` matching its `AGENTS.md` is not repeated.

## Analogy

The house rules pinned to the office wall — read once when you arrive, and they frame everything you do in that room.

## Related Concepts

- [[prompt-assembly|Prompt Assembly]]
- [[system-prompt|System Prompt]]
- [[file-context|File Context]]
- [[context-budget|Context Budget]]
