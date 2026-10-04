---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Rate Limit

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Rate limiting is when a provider throttles requests, surfaced in dsh as the `RATE_LIMIT` failure code. The DeepSeek adapter and pi-ai adapter both distinguish a transient `RATE_LIMIT` from `QUOTA` exhaustion, and the retry policy treats `RATE_LIMIT` as an eligible code for normal-mode retries with backoff.

## Concrete Example

A `RATE_LIMIT` finish triggers a normal-mode retry; a provider `Retry-After` header replaces local backoff when it fits the policy bounds.

## Analogy

A traffic jam that clears if you wait a minute and try again.

## Related Concepts

- [[model-error|Model Error]]
- [[llm-retry|LLM Retry]]
- [[usage-tracking|Usage Tracking]]
- [[provider-errors|Provider Errors]]

