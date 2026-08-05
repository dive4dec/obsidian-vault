---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Rollback

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Restoring a previous filesystem state. Command: /rollback N. Reverts to checkpoint N.

## Concrete Example

Changes broke the project. /rollback 1. Files restored to the state before the last change. The breakage is undone. You can try a different approach.

## Analogy

An undo button in a text editor - you made a mistake, press undo, the text reverts. /rollback is the undo button for your filesystem.

## Related Concepts

- [[checkpoints|Checkpoints]]
- [[filesystem-snapshot|Filesystem Snapshot]]
- [[undo|Undo]]
