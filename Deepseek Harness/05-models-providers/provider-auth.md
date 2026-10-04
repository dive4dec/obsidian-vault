---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Provider Auth

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Provider auth is the per-provider way a route authenticates: by API key or by account. `deepseek-official` resolves only its configured API-key reference (`x-api-key`), while `deepseek-account` resolves only the stored account grant (`x-dsh-auth-token`); neither route falls back to the other. pi-ai routes can also sign in via OAuth and store credentials at `llm-pi-ai/<provider id>`.

## Concrete Example

`apiKeyEnv: DEEPSEEK_API_KEY` for the key route versus `deepseekAccount.resolveToken(baseURL)` for the account route — two separate doors, no fallback between them.

## Analogy

Two different key fobs — the key one opens one door, the account one another; neither opens both.

## Related Concepts

- [[deepseek-api-key|DeepSeek API Key]]
- [[deepseek-account-llm|DeepSeek Account LLM]]
- [[multi-provider|Multi-Provider]]
- [[model-error|Model Error]]

