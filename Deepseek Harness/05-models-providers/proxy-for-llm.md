---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Proxy

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Routing model calls through a proxy lets a deployment reach a provider via an intermediary endpoint. The pi-ai adapter's `baseURL` per route points at a proxy (e.g. `https://proxy.example.com:8443`), and sensevoice model downloads follow redirects through the Host's fetch proxy. The DeepSeek adapter itself uses raw `fetch`, so it has no built-in shared proxy interception.

## Concrete Example

A pi-ai route `openai: { baseURL: 'https://proxy.example.com:8443', apiKeyEnv: OPENAI_API_KEY }` sends every model request through the proxy.

## Analogy

Sending mail through a forwarding office instead of straight to the address.

## Related Concepts

- [[api-base-url|API Base URL]]
- [[llm-pi-ai|Pi-Ai Provider]]
- [[model-health|Model Health Check]]
- [[provider-auth|Provider Auth]]

