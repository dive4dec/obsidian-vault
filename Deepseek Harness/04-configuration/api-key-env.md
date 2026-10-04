---
tags: [DSH-Configuration]
domain: Configuration
---

# API Key Env

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

The environment variable holding the DeepSeek API key is `DEEPSEEK_API_KEY`. dsh configuration references keys by name, never by value: an LLM adapter takes `apiKeyEnv: DEEPSEEK_API_KEY`, and requests resolve the current stored value per call. A key supplied in the launching environment (`DEEPSEEK_API_KEY=… dsh`, a CI secret, a container `-e`) wins for that run, is reported read-only, and cannot be overwritten from inside the product.

## Concrete Example

Write `apiKeyEnv: DEEPSEEK_API_KEY` in the model settings; rotating the stored key then takes effect on the very next request with no restart and no config edit.

## Analogy

It is a named slot for a secret: the config points at the slot, the credentials store fills it.

## Related Concepts

- [[credentials|Credentials]]
- [[env-vars|Environment Variables]]
- [[credentials-local|Local Credentials]]
