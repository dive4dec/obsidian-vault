---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Chunked List

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-chunked-list` provides immutable append-only lists for projection state, with bounded append copying, insertion-order iteration, and Zod checkpoint validation. It is the data structure used to keep growing lists — such as a todo list or a turn outline — bounded and cheap to copy as they accumulate in a session.

## Concrete Example

Projection units that keep growing lists use `dsh-chunked-list` so each append produces a bounded copy and the value can be checkpoint-validated with Zod before being served to clients.

## Analogy

A paginated notebook where each new page is a copy of the last plus one line, so you can always hand out a complete, consistent snapshot.

## Related Concepts

- [[deque|Deque]]
- [[context-projection|Context Projection]]
- [[turn-outline|Turn Outline]]
