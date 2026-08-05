---
tags: [Models-&-Providers]
domain: Models & Providers
---

# API Key

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

A secret key used to authenticate with an LLM provider. Stored in .env file.

## Concrete Example

OPENROUTER_API_KEY=sk-or-xxx. Hermes reads this from .env. Every API call includes this key for authentication. Never shared, redacted in output.

## Analogy

A house key - it proves you live there. An API key proves you have access to the LLM provider.

## Related Concepts

- [[provider|Provider]]
- [[env-file|Env File]]
- [[secrets-management|Secrets Management]]
