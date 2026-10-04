---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Delete a Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Deleting removes a session's stored log so it no longer appears in lists or searches. Because a persistence backend materializes each session as its own directory under the root, deletion is an operator action on that stored artifact. A session that never materialized before a crash never existed, so there is nothing to delete.

## Concrete Example

Removing the session's directory under the persistence `root` (e.g. `.../<normalized-cwd>--/<session>/`) takes it out of `ctx.sessionPersistence.list()`.

## Analogy

Deleting the folder that holds a saved game.

## Related Concepts

- [[session|Session]]
- [[session-backup|Session Backup]]
- [[session-archive|Archive a Session]]
