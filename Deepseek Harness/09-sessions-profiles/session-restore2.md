---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Restore

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Restoring a session backup returns previously saved session state to the live persistence root so it can be listed, queried, and resumed again. It is the inverse of backup: place the copied session directories back under the root and the backends pick them up. The format catalog validates each restored log as it is read.

## Concrete Example

Copy the backed-up session directories back under the persistence `root`; `ctx.sessionPersistence.list()` then shows them and `open(id, 'write')` resumes one.

## Analogy

Unzipping the saved-games backup and picking up where you left off.

## Related Concepts

- [[session-restore|Restore a Session]]
- [[session-backup|Session Backup]]
