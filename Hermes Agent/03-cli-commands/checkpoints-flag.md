---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Checkpoints Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --checkpoints flag enables filesystem checkpoints for this session. Hermes will snapshot your files before risky changes, so you can roll back with /rollback.

## Concrete Example

You run hermes chat --checkpoints. Before Hermes edits your project, it saves a snapshot. If things go wrong, /rollback restores everything.

## Analogy

Like wearing a seatbelt. You hope you never need it, but it is there if you do.

## Related Concepts

- [[checkpoints|Checkpoints]]
- [[file-toolset|File Toolset]]
- [[hermes-chat|Hermes Chat]]
