---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Limits

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Session limits bound how much of a session a read or search may return at once, keeping reads predictable. These caps live on the query backends and the title service rather than on the log itself, which remains unbounded and append-only. They govern paging, read windows, and title size.

## Concrete Example

`dsh-session-query-sqlite` uses `defaultLimit: 20` and `maxLimit: 100` per search page and `readWindowMax: 50` for `readEvent` context; `dsh-session-title` caps titles at `maxTitleBytes`.

## Analogy

The maximum page size a database query will hand back at once.

## Related Concepts

- [[session-storage|Session Storage]]
- [[jsonl-persistence|JSONL Persistence]]
- [[session-backup|Session Backup]]
