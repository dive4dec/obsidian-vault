---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Context

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Context is the window of messages the model sees each turn, derived from the session log by `dsh-session` and bounded by the model's context window. `dsh-token-meter` estimates current context pressure (`measure()`) so compaction, occupancy displays, and telemetry share one replay-based result without model calls, and `dsh-compaction` condenses history when pressure grows. Developers care because fitting the prompt to the window — and knowing when to compact — is the core of long-session behavior.

## Concrete Example

`ctx.tokenMeter.measure(session)` returns `totalTokens` (request-and-response pressure) and `surfaceTokens` (surface-only total).

## Analogy

It is a whiteboard of limited size: you can only keep the recent work visible, so you erase and summarize the oldest.

## Related Concepts

- [[memory|Memory]]
- [[turn|Turn]]
- [[token-meter|Token Meter]]
