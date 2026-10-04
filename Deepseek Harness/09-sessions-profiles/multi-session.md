---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Multiple Sessions

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Multiple sessions run under one deployment, each isolated by id and addressed through the same services. The session service returns every live session in creation order, and each persisted session keeps its own log and single-writer ownership. This is how subagents, forks, and parallel jobs coexist without interfering.

## Concrete Example

`ctx.sessions.list()` returns all live sessions in creation order, and `ctx.sessionQuery.listSessions()` lists every logical session newest first.

## Analogy

Many tabs open at once, each with its own history and its own save slot.

## Related Concepts

- [[resume|Resume]]
- [[session-lock|Session Lock]]
- [[session-list|List Sessions]]
