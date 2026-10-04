---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Summary

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The condensed stand-in that compaction writes in place of an older span of history. `dsh-compaction-basic` produces it with one extra model request and retains only the summary text, so recent messages stay intact and the conversation continues as if the summary had always been there. Summary messages carry a stable marker so they can be recognized after persistence or cloning.

## Concrete Example

`dsh-compaction` exports a stable marker for messages a backend wrote as summaries, so any consumer can recognize condensed history without knowing which backend produced it.

## Analogy

A "so far" recap at the start of a story — a few sentences that carry the meaning of everything that came before.

## Related Concepts

- [[compaction-basic|Basic Compaction]]
- [[history|Message History]]
- [[forgetting|Forgetting]]
- [[salience|Salience]]
