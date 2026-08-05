---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Model Fallback

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

If the primary model fails (rate limit, outage), Hermes falls back to a secondary model.

## Concrete Example

Primary: Claude. Rate limited. Fallback: GPT-4o. Hermes switches automatically. The user does not notice. Conversation continues.

## Analogy

A spare tire - if the main tire fails, the spare takes over. Model fallback switches to a backup model if the primary fails.

## Related Concepts

- [[provider-selection|Provider Selection]]
- [[hermes-model|Hermes Model]]
- [[rate-limiting|Rate Limiting]]
