---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Token Meter

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-token-meter` tracks token usage per model call and overall context pressure. `ctx.tokenMeter.measure(session)` replays the durable session log — deterministically, with no model calls — to return a snapshot whose `totalTokens` is request-and-response pressure and `surfaceTokens` is the surface-only total; consumers like `dsh-compaction-basic` and occupancy displays read the same result. With session projections it also exposes `tokenUsage`, `contextPressure`, and `contextBreakdown`. The estimator has no settings and adds no model-visible content.

## Concrete Example

```ts
const { totalTokens, surfaceTokens, nodes } = ctx.tokenMeter.measure(session)
```

## Analogy

It is a fuel gauge computed from the trip log rather than a sensor in the tank.

## Related Concepts

- [[context|Context]]
- [[model|Model]]
- [[memory|Memory]]
