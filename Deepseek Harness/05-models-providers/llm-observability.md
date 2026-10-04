---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Observability

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

LLM observability is exposing model-call data for monitoring and telemetry. dsh surfaces model usage through the token-meter session projections and product telemetry, and OTel packages emit traces for the model path. Usage folds replace samples within each attempt and feed the `tokenUsage` and `contextPressure` projection units.

## Concrete Example

The `contextPressure` projection carries `pressureTokens`, `projectedTokens`, and `contextWindow` from the newest `request/context` record for downstream telemetry.

## Analogy

The dashboard of gauges — fuel, range, and load — for the model's trip.

## Related Concepts

- [[usage-tracking|Usage Tracking]]
- [[token-meter|Token Meter]]
- [[model-logging|Model Logging]]
- [[cost-estimation|Cost Estimation]]

