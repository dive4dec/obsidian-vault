---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Filesystem Snapshot

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

A saved copy of all file states at a point in time. Used by checkpoints for rollback.

## Concrete Example

Snapshot: all files in /home/alice/project/ are recorded. File states, permissions, content. On rollback, all files are restored to the snapshot state.

## Analogy

A photograph of your room before cleaning - you can see exactly where everything was. A filesystem snapshot is a photograph of your files before changes.

## Related Concepts

- [[checkpoints|Checkpoints]]
- [[rollback|Rollback]]
- [[safety-net|Safety Net]]
