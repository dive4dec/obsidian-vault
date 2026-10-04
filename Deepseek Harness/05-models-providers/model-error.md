---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Error

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model errors are the stable, provider-neutral failure codes that every `finish` chunk carries on failure, so consumers route on the code — never on message text. DeepSeek codes include `NO_ADAPTER`, `MISSING_CREDENTIAL`, `INVALID_CREDENTIAL`, `AUTH`, `RATE_LIMIT`, `QUOTA`, `CONTEXT_WINDOW_EXCEEDED`, and `EMPTY_RESPONSE`.

## Concrete Example

A 401/403 maps to `AUTH`, a missing key to `MISSING_CREDENTIAL`, a malformed key to `INVALID_CREDENTIAL` (naming the reference to fix, never the key itself).

## Analogy

A machine's error light with a code you look up, instead of a vague "something went wrong."

## Related Concepts

- [[provider-errors|Provider Errors]]
- [[llm-retry|LLM Retry]]
- [[model-fallback|Model Fallback]]
- [[model-health|Model Health Check]]

