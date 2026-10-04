---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Windowing

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The general idea of keeping only a bounded window of the conversation visible to the model. In dsh it is realized by `dsh-compaction-basic` preserving recent messages while condensing the oldest, and by `dsh-deque`, a circular deque giving amortized constant-time queue operations and immediate release of removed entries for bounded context structures.

## Concrete Example

`dsh-compaction-basic` keeps recent history intact (its `retainRatio`) and condenses the older span; `dsh-deque` supports bounded append and removal so removed context is released promptly.

## Analogy

A sliding viewport into a long scroll — only the section currently in view is on the desk, but the whole scroll still exists.

## Related Concepts

- [[sliding-window|Sliding Window]]
- [[deque|Deque]]
- [[compaction-basic|Basic Compaction]]
- [[context-limit|Context Limit]]
