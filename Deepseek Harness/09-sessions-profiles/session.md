---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A dsh session is the event-sourced record behind every agent interaction. `dsh-session` appends every model-visible fact as a typed event and derives the model's history from that log, so a session can be inspected, replayed, forked, and resumed. Developers care because the whole durable story of a conversation — including sub-sessions — is reconstructable from these events.

## Concrete Example

`ctx.sessions.create(sessionId, { meta: { cwd: '/workspace' } })` builds a live session; `session.append('user/message', ...)` commits a typed event, and `session.deriveMessages()` projects the log into the `Message[]` the model sees.

## Analogy

A git repository for a conversation, where every fact is an event and any state is computed from the log.

## Related Concepts

- [[session-persistence|Session Persistence]]
- [[resume|Resume]]
- [[fork|Fork a Session]]
- [[history|History]]
