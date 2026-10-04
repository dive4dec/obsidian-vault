---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Limit

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The hard limit on context size for the model route being used. It is the boundary `dsh-compaction-basic` protects: when measured pressure crosses `thresholdRatio` of the limit, it condenses oldest history, and after a confirmed overflow error it condenses and retries. The limit is a property of the adapter's route, read via `ctx.llm.resolveModelInfo().context`.

## Concrete Example

`dsh-compaction-basic` starts automatic condensation at `thresholdRatio` (default 0.8) of the route's context, and a per-model `modelPolicies` entry can lower the threshold for a small-context model.

## Analogy

The "full" mark on a tank — once the water passes it, the overflow valve kicks in.

## Related Concepts

- [[context-window|Context Window]]
- [[overflow|Context Overflow]]
- [[compaction-basic|Basic Compaction]]
- [[token-meter|Token Meter]]
