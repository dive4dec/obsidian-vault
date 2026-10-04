---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Window

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The token capacity of the model route being used. It is a property of the adapter that owns the provider/model route and is exposed through `ctx.llm.resolveModelInfo().context`; the token meter itself makes no model calls and adds no model-visible content. `dsh-compaction-basic` reads it to decide when automatic condensation should begin, and a single backend can serve models with different window sizes via per-model overrides.

## Concrete Example

In a `dsh-compaction-basic` config you set `thresholdRatio: 0.8` to start condensing at 80% of the window, and a `modelPolicies` entry can give a small-context route its own `thresholdRatio: 0.7` and `retainTokens: 2048`.

## Analogy

The fixed size of a clipboard — the model can only read what fits on it, so a long conversation has to be summarized to stay on it.

## Related Concepts

- [[context-limit|Context Limit]]
- [[compaction-basic|Basic Compaction]]
- [[token-meter|Token Meter]]
- [[overflow|Context Overflow]]
