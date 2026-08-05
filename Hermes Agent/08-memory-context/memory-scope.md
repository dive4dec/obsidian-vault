---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Memory Scope

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

Memories can be global (apply everywhere) or scoped to a project or profile. Scope prevents memories from one project leaking into another.

## Concrete Example

A memory scoped to project A: Use PostgreSQL. This does not appear when working on project B (which uses SQLite). Scope keeps project memories separate.

## Analogy

Folders in your notebook - math notes in the math folder, English notes in the English folder. You do not mix them. Memory scope keeps memories in the right context.

## Related Concepts

- [[memory-target|Memory Target]]
- [[usermd|USER.md]]
- [[memory-provider|Memory Provider]]
