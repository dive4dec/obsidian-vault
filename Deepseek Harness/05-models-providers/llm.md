---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Layer

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm` is the provider-neutral model-call service an agent loop, session-title generator, or compaction summarizer streams through. It keeps one vocabulary across the loop, the session log, and every consumer, while each provider adapter owns its own wire format. The service itself has no configuration and no provider code — you mount it with at least one adapter.

## Concrete Example

Mount the service plus an adapter, then name the route in each request:

```yaml
- name: '@deepseek-ai/dsh-llm'
- name: '@deepseek-ai/dsh-llm-deepseek-api-key'
  config: { apiKeyEnv: DEEPSEEK_API_KEY }
```

A request streams with `ctx.llm.stream({ provider: 'deepseek-official', model: 'deepseek-flash', messages })` and always ends in one terminal `finish` chunk.

## Analogy

A universal power strip — one socket, any adapter plugs in and you get the same electricity.

## Related Concepts

- [[deepseek-provider|DeepSeek Provider]]
- [[llm-pi-ai|Pi-Ai Provider]]
- [[llm-retry|LLM Retry]]
- [[token-meter|Token Meter]]

