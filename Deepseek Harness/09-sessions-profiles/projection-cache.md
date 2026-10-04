---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Projection Cache

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-projection-cache` keeps durable per-session projection checkpoints so history lists, statistics, and goal snapshots can read cached values without loading each session log. Cold projection folds can resume after the checkpointed prefix, reducing restart work. The session log remains authoritative: a crash can leave a checkpoint stale but never ahead of committed events.

## Concrete Example

Mount it beside the projection registry and storage stack for zero-I/O list reads of cold sessions; incompatible records are ignored or backed up.

## Analogy

A cache of the scoreboard so you avoid re-reading every play.

## Related Concepts

- [[session-projection|Session Projection]]
- [[session-stats|Session Stats]]
- [[turn-outline|Turn Outline]]
