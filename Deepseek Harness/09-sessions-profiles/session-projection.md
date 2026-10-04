---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Projection

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-projection` serves current per-session state — todos, goals, conversation statistics — to clients without replaying the raw event log. Domain plugins register a projection unit (key, state schema, initial state, and a synchronous `apply(state, event)`), and carriers receive complete, schema-validated JSON values through snapshots and change notifications.

## Concrete Example

`snapshot(session)` returns `{ asOfSeq, values }`, where `asOfSeq` is the seq of the last event every value reflects; `onChanged(listener)` subscribes to per-change notifications.

## Analogy

A live dashboard computed from the event feed instead of re-reading the database.

## Related Concepts

- [[projection-cache|Projection Cache]]
- [[turn-outline|Turn Outline]]
- [[session-stats|Session Stats]]
