---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Dedup

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Removing duplicated context so the same content is not counted twice in the window. `dsh-agent-instructions` renders sibling files whose trimmed content matches only once, so a `CLAUDE.md` that duplicates its `AGENTS.md` is not repeated, and `dsh-repeat-tool-reminder` nudges the model out of identical tool-call loops.

## Concrete Example

If a project `CLAUDE.md` has the same content as its `AGENTS.md` after trimming, `dsh-agent-instructions` includes it once instead of twice.

## Analogy

Listing a shared contact once in a group instead of once per person who mentions them.

## Related Concepts

- [[instructions|Instructions]]
- [[repeat-reminder|Repeat Tool Reminder]]
- [[salience|Salience]]
