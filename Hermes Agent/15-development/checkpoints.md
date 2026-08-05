---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Checkpoints

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Filesystem snapshots that can be restored with /rollback. Lets you undo changes. Configurable: enabled, max_snapshots (50).

## Concrete Example

Before a risky change: /checkpoint creates a snapshot. Change goes wrong: /rollback 1 restores the previous state. Files are back to where they were. Safety net.

## Analogy

Save points in a video game - before a boss fight, you save. If you lose, you reload. Checkpoints are save points for your filesystem.

## Related Concepts

- [[rollback|Rollback]]
- [[filesystem-snapshot|Filesystem Snapshot]]
- [[safety-net|Safety Net]]
