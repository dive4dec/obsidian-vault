---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Deque

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-deque` is a circular deque for host and browser packages that need amortized constant-time queue operations, immediate release of removed entries, and bounded vacant storage. It underlies the bounded, sliding-window view of context: as new messages are pushed, the oldest are popped and released promptly.

## Concrete Example

Use `dsh-deque` to keep a fixed-size recent-message window where pushing a new entry and popping the oldest are both O(1) and the removed entry is released immediately rather than lingering.

## Analogy

A conveyor belt with a fixed length — each new item nudges the oldest one off the far end.

## Related Concepts

- [[windowing|Windowing]]
- [[sliding-window|Sliding Window]]
- [[chunked-list|Chunked List]]
- [[forgetting|Forgetting]]
