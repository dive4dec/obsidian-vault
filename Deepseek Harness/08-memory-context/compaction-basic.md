---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Basic Compaction

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The shipped default condensation backend. It keeps long conversations working near the model's context limit by condensing the oldest history into a model-written summary while preserving recent messages, and it recovers after a confirmed context-overflow error by condensing and retrying. It uses one extra model request and retains only the summary text; it cannot shrink the system prompt, tools, or session prefix, nor split an indivisible unit like a single huge tool call.

## Concrete Example

Default behavior: condense automatically as the conversation grows, recover after overflow, condense on demand via `/compact`, and — when `dsh-compaction-tool-result-pruner` is mounted — trim oversized tool outputs before summarizing. Tune with `thresholdRatio` and `retainRatio`.

## Analogy

A running meeting that, near the end of the room, summarizes the first agenda items into a recap so discussion can continue.

## Related Concepts

- [[compaction|Compaction]]
- [[tool-result-pruner|Tool-Result Pruner]]
- [[summary|Summary]]
- [[context-limit|Context Limit]]
