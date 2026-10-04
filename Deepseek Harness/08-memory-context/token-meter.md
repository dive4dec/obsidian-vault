---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Token Meter

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-token-meter` provides replay-aware token and context-pressure measurement. `ctx.tokenMeter` estimates a session's current request and context pressure or prices one message by replaying the durable session log, so it is deterministic and makes no model calls. Compaction planning, occupancy displays, and telemetry all share the same result instead of each recomputing it.

## Concrete Example

Read `ctx.tokenMeter` for `tokenUsage`, `contextPressure`, and `contextBreakdown`; text and image routes without declared pricing use an approximate fixed heuristic, and files are priced as model-visible handle text.

## Analogy

A bathroom scale you step on before each trip — it tells you how much you're carrying without you having to guess.

## Related Concepts

- [[context-budget|Context Budget]]
- [[compaction-basic|Basic Compaction]]
- [[context-metrics|Context Metrics]]
- [[context-limit|Context Limit]]
