---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Archive a Session

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Archiving keeps an old session retrievable without it competing with active work — a logical grouping rather than physical deletion. It suits deployments that want to quiet completed conversations while preserving the record for later query, reference, or export. The stored log itself is unchanged, so archived sessions remain fully readable.

## Concrete Example

Move or flag a session's directory under the persistence `root` so it stays readable by `ctx.sessionQuery` but out of the active list.

## Analogy

Moving finished case files to a cold storage shelf.

## Related Concepts

- [[session|Session]]
- [[session-backup|Session Backup]]
- [[session-delete|Delete a Session]]
