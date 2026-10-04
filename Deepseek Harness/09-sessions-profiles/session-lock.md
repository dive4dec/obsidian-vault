---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Lock

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A session lock enforces single-writer ownership so two writers can never corrupt one log. Within a backend instance, only one writer per session is allowed; a second write open while an owner is active rejects with `SessionAlreadyOwnedError`. Ownership is in-process, and a closed handle rejects further operations.

## Concrete Example

`ctx.sessionPersistence.open(id, 'write')` takes ownership; a concurrent second write open rejects, and mutations on a read handle reject with `SessionReadOnlyError`.

## Analogy

A checkout lock that lets only one cashier scan into the same register.

## Related Concepts

- [[session-persistence|Session Persistence]]
- [[resume|Resume]]
- [[multi-session|Multiple Sessions]]
