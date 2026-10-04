---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Retry

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm-retry` is the executor that re-runs failed model requests at durable agent-step boundaries. It has no configuration of its own — the retry policy lives on each provider adapter's config (`retryPolicy`). It recovers from transient failures (rate limits, server errors, timeouts) instead of ending the turn; direct `ctx.llm.stream()` calls remain single-attempt.

## Concrete Example

Set a policy on the adapter and mount the executor:

```yaml
- name: '@deepseek-ai/dsh-llm-deepseek-api-key'
  config: { apiKeyEnv: DEEPSEEK_API_KEY, retryPolicy: { mode: always } }
- name: '@deepseek-ai/dsh-llm-retry'
```

Omission uses normal mode: five retries for `EMPTY_RESPONSE`, `RATE_LIMIT`, `SERVER`, `TIMEOUT`, `TRANSPORT` with bounded backoff.

## Analogy

A phone that redials automatically when the call drops, up to a set number of tries.

## Related Concepts

- [[llm|LLM Layer]]
- [[model-error|Model Error]]
- [[rate-limit|Rate Limit]]
- [[model-fallback|Model Fallback]]

