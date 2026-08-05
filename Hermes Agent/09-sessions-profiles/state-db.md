---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# State DB

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

The main Hermes database: ~/.hermes/state.db. SQLite. Stores sessions, messages, and search index.

## Concrete Example

state.db: tables include sessions, messages, tool_calls. FTS5 virtual table for full-text search. All conversation data in one file.

## Analogy

A school records office - all student records in one place. state.db is the records office for Hermes.

## Related Concepts

- [[session-store|Session Store]]
- [[sessions|Sessions]]
- [[sqlite-fts5|SQLite FTS5]]
