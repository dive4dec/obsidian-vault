---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# List Sessions

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Listing enumerates the sessions a deployment can see, distinguishing live sessions from persisted copies. Both the persistence seam and the query service expose it: `list()` returns one snapshot per visible stored session, while the query service orders logical sessions newest first with availability flags.

## Concrete Example

`ctx.sessionPersistence.list()` returns a snapshot per stored session, and `ctx.sessionQuery.listSessions()` returns every logical session newest first with `live` and `persisted` flags.

## Analogy

The file dialog showing every saved game, newest first.

## Related Concepts

- [[session-query|Session Query]]
- [[multi-session|Multiple Sessions]]
- [[session-ui|Session UI]]
