---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Fallback

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model fallback is recovering from a failing model call by retrying or delegating. In dsh the `dsh-llm-retry` executor re-runs the failed step in the same open turn, and normal-mode recovery delegates downstream when a failure code is ineligible or the budget is exhausted. The service itself never re-runs a request — retry is a separate concern.

## Concrete Example

A `RATE_LIMIT` finish on `deepseek-official` schedules a durable `llm/retry` event, waits on a cancellable backoff timer, then re-runs the failed step over the same durable history.

## Analogy

When one checkout line is jammed, you fall back to the next one after a short wait.

## Related Concepts

- [[llm-retry|LLM Retry]]
- [[model-error|Model Error]]
- [[rate-limit|Rate Limit]]
- [[llm|LLM Layer]]

