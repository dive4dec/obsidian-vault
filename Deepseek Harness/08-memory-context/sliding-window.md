---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Sliding Window

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

A windowing strategy where the oldest messages drop out of the visible context as the window fills. In dsh the closest realization is `dsh-compaction-basic`: as token pressure builds toward the limit, the oldest history is condensed and recent messages remain, effectively sliding the visible window forward.

## Concrete Example

`dsh-compaction-basic` uses `retainRatio` to keep a recent fraction of history and condenses the older portion, so the model's view advances forward while the oldest turns recede into the summary.

## Analogy

A news ticker that scrolls older headlines off the left edge while new ones come in from the right.

## Related Concepts

- [[windowing|Windowing]]
- [[compaction-basic|Basic Compaction]]
- [[forgetting|Forgetting]]
- [[deque|Deque]]
