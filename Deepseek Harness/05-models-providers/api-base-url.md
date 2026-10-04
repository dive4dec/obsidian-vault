---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# API Base URL

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The API base URL is the endpoint root a provider route sends requests to. On the DeepSeek adapter, `baseURL` resolves from an explicit value, then `$DEEPSEEK_BASE_URL`, then the official root `https://api.deepseek.com/anthropic`; Messages and Files requests append `/v1/messages` and `/v1/files`. pi-ai routes set `baseURL` per provider.

## Concrete Example

`config: { baseURL: 'https://api.deepseek.com/anthropic' }` or the env var `DEEPSEEK_BASE_URL`; a base URL must use HTTP(S) without credentials, query, or fragment.

## Analogy

The street address of the building — every request is delivered to this address plus a room.

## Related Concepts

- [[deepseek-provider|DeepSeek Provider]]
- [[llm-pi-ai|Pi-Ai Provider]]
- [[proxy-for-llm|LLM Proxy]]
- [[model-health|Model Health Check]]

