---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Ephemeral Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

An ephemeral session is short-lived and in-memory only: it exists while the process runs and is not materialized to a persistence backend. `dsh-session` holds sessions in memory unless a persistence backend is added, so a session with no durable write handle is effectively ephemeral. This suits throwaway computations where no later resume is needed.

## Concrete Example

A session created without an active persistence write handle persists nothing and vanishes when the process exits.

## Analogy

A whiteboard sketch you wipe off when the meeting ends.

## Related Concepts

- [[fresh-session|Fresh Session]]
- [[session|Session]]
