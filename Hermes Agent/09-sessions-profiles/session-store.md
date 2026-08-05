---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Session Store

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

The database where sessions are stored. Located at ~/.hermes/state.db. SQLite with FTS5 full-text search.

## Concrete Example

state.db: SQLite database. Stores all messages, tool calls, and metadata. FTS5 enables fast text search across all sessions. hermes sessions list reads from here.

## Analogy

A filing cabinet - every document is stored in a drawer. The session store is the filing cabinet for conversations.

## Related Concepts

- [[sessions|Sessions]]
- [[state-db|State DB]]
- [[sqlite-fts5|SQLite FTS5]]
