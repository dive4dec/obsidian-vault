---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Backup

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Backing up sessions means copying the persistence root — the directory tree of per-session logs — to a safe place before risky operations like updates. Because every durable fact lives in those files, a copy of the root is a complete backup of all session state. This is the same operation as backing up `$DSH_HOME` session data.

## Concrete Example

Copy the `dsh-session-persistence-jsonl` `root` directory (all `<normalized-cwd>--/<session>/` trees) to preserve every stored session.

## Analogy

Zipping the entire saved-games folder before an OS upgrade.

## Related Concepts

- [[session-restore2|Session Restore]]
- [[session-archive|Archive a Session]]
- [[session-storage|Session Storage]]
