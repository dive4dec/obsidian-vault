---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Forgetting

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Dropping context that is no longer needed so the window can be reused. `dsh-compaction-basic` condenses the oldest history as pressure builds, and `dsh-deque` releases removed entries immediately so dropped context does not linger in memory. The original content stays in the session log, so forgetting from the model's view is reversible.

## Concrete Example

`dsh-compaction-basic` condenses the oldest span into a summary (its `retainRatio` keeps only the recent tail), effectively forgetting the older detail from the model's active view.

## Analogy

Clearing the desk of papers you no longer need — they're filed away, not destroyed.

## Related Concepts

- [[sliding-window|Sliding Window]]
- [[recall|Recall]]
- [[deque|Deque]]
- [[salience|Salience]]
