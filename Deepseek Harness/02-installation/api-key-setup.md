---
tags: [DSH-Installation]
domain: Installation & Setup
---

# API Key Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

API key setup configures how dsh authenticates to the DeepSeek provider. The `dsh-llm-deepseek-api-key` plugin resolves the key per request, with `apiKeyEnv` defaulting to `DEEPSEEK_API_KEY`. A developer cares because a missing key fails with `MISSING_CREDENTIAL` and a malformed one with `INVALID_CREDENTIAL`.

## Concrete Example

Configure `apiKeyEnv: DEEPSEEK_API_KEY` in the `llm-deepseek` entry; the plugin sends it as `x-api-key` per request.

## Analogy

Like the secret code on a keycard that every door check reads freshly.

## Related Concepts

- [[credentials-setup|Credentials Setup]]
- [[account-setup|Account Setup]]
- [[env-setup|Environment Setup]]
