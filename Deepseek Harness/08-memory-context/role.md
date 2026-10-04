---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Message Role

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The role a message carries — user, assistant, system, or tool — which determines how the model interprets it and how the harness may modify it. `dsh-compaction-image-offload`, for example, walks the surface in model request order and skips assistant nodes when marking images to offload, so role governs what can be condensed or trimmed.

## Concrete Example

When offloading images, `dsh-compaction-image-offload` walks the surface in model request order and skips assistant nodes, acting only on the user- and tool-side occurrences it marks.

## Analogy

The speaker labels in a transcript — "user:", "assistant:", "tool:" — telling you who said each line.

## Related Concepts

- [[message|Message]]
- [[role-play|System Role]]
- [[tool-message|Tool Message]]
- [[ordering|Context Ordering]]
