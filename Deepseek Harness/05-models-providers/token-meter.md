---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Token Meter

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-token-meter` is the replay-aware measurement service behind `ctx.tokenMeter`. It estimates a session's current request and context pressure by replaying the durable log — deterministic, no model calls — so compaction, occupancy displays, and telemetry all share one result. `measure(session)` returns `totalTokens` and `surfaceTokens`; it adds no model-visible content.

## Concrete Example

`const { totalTokens, surfaceTokens, nodes } = ctx.tokenMeter.measure(session)`, plus `ctx.tokenMeter.estimateMessage(message)`. Text uses a fixed four-characters-per-token heuristic; image routes with declared pricing use the adapter's visual-token price.

## Analogy

A fuel gauge that estimates the remaining range from the trip log without spending fuel.

## Related Concepts

- [[context-window|Context Window]]
- [[usage-tracking|Usage Tracking]]
- [[prompt-budget|Prompt Budget]]
- [[offload|Image Offload]]

