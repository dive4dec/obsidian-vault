---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Compaction

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The contract that shrinks an over-long conversation to fit the context window. `dsh-compaction` defines what condensation does and how a backend is built, but performs no condensation itself — it must be mounted alongside a backend such as `dsh-compaction-basic`. When it runs, a selected older span is replaced by one summary message while recent history is untouched, and the result reports which history was condensed and the estimated tokens freed.

## Concrete Example

Mount the backend plus the on-demand command to turn the feature on:

```yaml
- name: '@deepseek-ai/dsh-compaction-basic'
- name: '@deepseek-ai/dsh-command-compact'
```

## Analogy

Collapsing the first half of a meeting transcript into a single "decisions so far" note so the rest of the room stays usable.

## Related Concepts

- [[compaction-basic|Basic Compaction]]
- [[summary|Summary]]
- [[token-meter|Token Meter]]
- [[overflow|Context Overflow]]
