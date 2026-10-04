---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session ID

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

The session id addresses a single session everywhere it is stored or queried: persistence handles, query reads, titles, and export all key on it. `create` on an occupied id rejects with `SessionAlreadyExistsError`, and `open(id, 'write')` while an owner is active rejects with `SessionAlreadyOwnedError`. It is the stable handle that lets a session be found and resumed later.

## Concrete Example

`ctx.sessions.get(id)`, `ctx.sessionPersistence.open(id, 'write')`, and `ctx.sessionQuery.readSession(id)` all take the same id; the export ZIP is named `dsh-session-<id>.zip`.

## Analogy

The primary key of a row in a database.

## Related Concepts

- [[session|Session]]
- [[session-persistence|Session Persistence]]
- [[session-query|Session Query]]
