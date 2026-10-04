---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Cache

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-session-projection-cache` keeps durable per-session projection checkpoints so history lists, statistics, and goal snapshots can read cached values without loading each session log. Cold projection folds can resume after the checkpointed prefix, reducing restart work, while the session log remains authoritative.

## Concrete Example

Mount it beside the projection registry and storage stack so clients can list projection values for cold sessions without loading their logs; a crash can leave a checkpoint stale but never ahead of committed events.

## Analogy

A saved-game snapshot in a video game — you resume from the checkpoint instead of replaying the whole level.

## Related Concepts

- [[context-projection|Context Projection]]
- [[context-metrics|Context Metrics]]
- [[turn-outline|Turn Outline]]
