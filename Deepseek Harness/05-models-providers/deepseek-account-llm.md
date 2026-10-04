---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# DeepSeek Account LLM

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm-deepseek-account` registers authentication and model discovery for the `deepseek-account` route, using a stored account grant instead of an API key. It sends the token as `x-dsh-auth-token` (no Bearer prefix) and owns HTTP 401 classification. Signed-out or ineligible requests fail with `ACCOUNT_SIGN_IN_REQUIRED` and never fall back to an API key.

## Concrete Example

```yaml
- id: llm-deepseek-account
  name: '@deepseek-ai/dsh-llm-deepseek-account'
  config: { reasoningEffort: high }
```

Only `deepseekAccount.resolveToken(baseURL)` supplies the token; an HTTP 401 maps to `ACCOUNT_TOKEN_INVALID`, and a `QUOTA` failure is rewritten to `ACCOUNT_QUOTA`.

## Analogy

The membership card that opens the account-only door — a different key from the API key.

## Related Concepts

- [[deepseek-provider|DeepSeek Provider]]
- [[provider-auth|Provider Auth]]
- [[deepseek-api-key|DeepSeek API Key]]
- [[rate-limit|Rate Limit]]

