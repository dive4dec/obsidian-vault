---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Cost Estimation

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Cost estimation is deriving spend from token usage. The token meter's measurements are reference figures, not billing records — nothing in the harness makes billing decisions from them, and the fixed heuristic underprices CJK text and JSON schemas. Exact billing-grade counts require a provider tokenizer.

## Concrete Example

`ctx.tokenMeter.measure(session)` returns `surfaceTokens` you can price against a route; the meter prices offloaded images as placeholder text so they stop costing visual tokens.

## Analogy

Estimating a grocery bill by eyeballing the cart instead of scanning each item.

## Related Concepts

- [[usage-tracking|Usage Tracking]]
- [[token-meter|Token Meter]]
- [[offload|Image Offload]]
- [[rate-limit|Rate Limit]]

