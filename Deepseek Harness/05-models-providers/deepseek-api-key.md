---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# DeepSeek API Key

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm-deepseek-api-key` registers authentication and model discovery for the `deepseek-official` route. It resolves the configured key per request and sends it in the `x-api-key` header for Messages and Files calls. Missing credentials fail with `MISSING_CREDENTIAL`; malformed ones fail with `INVALID_CREDENTIAL`.

## Concrete Example

```yaml
- id: llm-deepseek
  name: '@deepseek-ai/dsh-llm-deepseek-api-key'
  config: { apiKeyEnv: DEEPSEEK_API_KEY, reasoningEffort: high }
```

`apiKeyEnv` defaults to `DEEPSEEK_API_KEY` and resolves per request; model discovery returns the configured catalog regardless of credentials.

## Analogy

A key fob for one specific car — it only opens the `deepseek-official` door.

## Related Concepts

- [[deepseek-provider|DeepSeek Provider]]
- [[provider-auth|Provider Auth]]
- [[deepseek-account-llm|DeepSeek Account LLM]]
- [[model-error|Model Error]]

