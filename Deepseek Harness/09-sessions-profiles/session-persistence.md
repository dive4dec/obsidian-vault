---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Persistence

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-persistence` is the durable storage seam that makes in-memory session logs survive restarts. It exposes a backend-independent API to create, open, stat, list, and flush stored sessions while preserving contiguous append-only history. A completed flush is the durability barrier: readers never see torn tails or invalid records, and only one writer may own a session at a time.

## Concrete Example

`ctx.sessionPersistence` offers `create(header)`, `open(id, 'write')`, `stat(id)`, `list()`, and `flush()`; the shipped JSONL backend writes one append-only `.jsonl.zstd` log per session.

## Analogy

The save system of a game, where a completed flush is a confirmed save point.

## Related Concepts

- [[jsonl-persistence|JSONL Persistence]]
- [[checkpoint-policy|Checkpoint Policy]]
- [[session-storage|Session Storage]]
- [[resume|Resume]]
