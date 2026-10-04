---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Resume

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Resume reactivates a persisted session from its stored event log, restoring exactly the state that was checkpointed. Developers use it to continue prior work after a crash or restart instead of redoing turns. The read path revalidates the log before the session goes live, so an inconsistent or torn tail is caught first.

## Concrete Example

Open a stored session with `ctx.sessionPersistence.open(id, 'write')` to claim single-writer ownership and continue appending; the `--resume <id>` app flag is the user-facing form.

## Analogy

Loading a saved game and picking up exactly where you left off.

## Related Concepts

- [[session-restore|Restore a Session]]
- [[checkpoint-policy|Checkpoint Policy]]
- [[session-persistence|Session Persistence]]
