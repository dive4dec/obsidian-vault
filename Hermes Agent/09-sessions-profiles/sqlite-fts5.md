---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# SQLite FTS5

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

Full-Text Search version 5. A SQLite extension that enables fast text search. Hermes uses it for session search.

## Concrete Example

FTS5: you search docker debugging. It finds all sessions containing docker or debugging. Ranked by relevance. Fast, like Google for your chats.

## Analogy

A search engine index - it catalogs every word in every document. FTS5 catalogs every word in every session for fast search.

## Related Concepts

- [[session-store|Session Store]]
- [[session-search-tool|Session Search Tool]]
- [[state-db|State DB]]
