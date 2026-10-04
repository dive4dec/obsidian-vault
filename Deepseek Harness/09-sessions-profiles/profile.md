---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Profile

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A profile is the composed plugin stack a session runs under, and it decides which session capabilities exist. Which persistence backend, query backend, title provider, and checkpoint policy are available in a session is entirely determined by the profile that mounted them. A session is only as durable and queryable as its profile's composition.

## Concrete Example

A profile that includes `dsh-session-persistence-jsonl`, `dsh-session-checkpoint-policy`, and `dsh-session-query-sqlite` gets durable, crash-safe, searchable sessions; one that omits them does not.

## Analogy

The channel lineup that decides which shows a TV can actually receive.

## Related Concepts

- [[session-persistence|Session Persistence]]
- [[session|Session]]
