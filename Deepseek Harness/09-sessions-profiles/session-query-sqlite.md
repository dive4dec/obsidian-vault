---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# SQLite Query

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-query-sqlite` adds ranked SQLite FTS5 full-text search across session history, either across sessions or within one, with cursor pagination. It indexes live and persisted history in a separate derived database, so searches reflect current state without modifying the session-persistence store. Search is opt-in in shipped compositions and matches tokens and phrases rather than arbitrary substrings.

## Concrete Example

Mount `@deepseek-ai/dsh-session-query-sqlite` with `path: /abs/path/session-search.db`; `searchSessions(request)` and `searchEvents(request)` return ranked pages, with `defaultLimit: 20` and `maxLimit: 100`.

## Analogy

An index attached to a database so text searches come back ranked and fast.

## Related Concepts

- [[session-query|Session Query]]
- [[session-list|List Sessions]]
- [[session-ui|Session UI]]
