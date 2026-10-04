---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Provider Errors

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Provider errors are the categorized, stable failure codes a provider response maps to. The DeepSeek adapter maps non-2xx responses to `AUTH` (401/403), `QUOTA`, `RATE_LIMIT`, `CONTEXT_WINDOW_EXCEEDED`, `INVALID_REQUEST`, `SERVER`, or `HTTP_<status>`; pre-response transport failures throw `TRANSPORT`. Consumers route on the code, never on message text.

## Concrete Example

An HTTP 402 or in-band SSE quota error becomes `QUOTA` (rewritten to `ACCOUNT_QUOTA` on the account route), and a 401/403 becomes `AUTH`.

## Analogy

A set of distinct warning lights, each with a meaning you can look up.

## Related Concepts

- [[model-error|Model Error]]
- [[rate-limit|Rate Limit]]
- [[llm-retry|LLM Retry]]
- [[model-health|Model Health Check]]

