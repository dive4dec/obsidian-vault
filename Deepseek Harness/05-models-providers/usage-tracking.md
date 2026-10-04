---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Usage Tracking

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Usage tracking is recording token usage per call for cost and telemetry. The token meter folds provider usage into session projections (`tokenUsage`, `contextPressure`, `contextBreakdown`), and DeepSeek reports uncached input, output, cache-read, and cache-write tokens in its usage totals.

## Concrete Example

The `tokenUsage` projection carries `uncachedInputTokens`, `outputTokens`, `cacheReadTokens`, and `cacheWriteTokens` folded from each settled attempt.

## Analogy

The odometer and fuel log on a car trip — it records what you used.

## Related Concepts

- [[token-meter|Token Meter]]
- [[cost-estimation|Cost Estimation]]
- [[llm-observability|LLM Observability]]
- [[rate-limit|Rate Limit]]

