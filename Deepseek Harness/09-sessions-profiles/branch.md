---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Branch a Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

A branch is one of several sessions that descend from a common parent, each carrying the shared prefix plus its own divergent events. The query service exposes the relationship explicitly so a deployment can see where a session came from and what it spawned. This is the persistent form of exploration: try two directions from the same point.

## Concrete Example

`ctx.sessionQuery.traceSession(id)` returns the known ancestor chain and recursive descendant trees for a session.

## Analogy

Two lanes of a highway that split from the same overpass.

## Related Concepts

- [[fork|Fork a Session]]
- [[session|Session]]
