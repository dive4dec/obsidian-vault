---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Query

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-query` is the unified read service for session history: list, filter, read, and trace sessions without touching the session service or a backend directly. Reads prefer live sessions over persisted copies and return detached clones from one consistent observation. Exact reads, filters, and traces work with any storage setup; ranked full-text search needs a backend such as `dsh-session-query-sqlite`.

## Concrete Example

`ctx.sessionQuery.listSessions()`, `readSession(id)`, `filterSessions(filters)`, and `traceSession(id)` are the core operations; it is provided by a mounted backend, never mounted alone.

## Analogy

A read-only analytics dashboard over your entire conversation history.

## Related Concepts

- [[session-query-sqlite|SQLite Query]]
- [[session-list|List Sessions]]
- [[session-reference|Session Reference]]
