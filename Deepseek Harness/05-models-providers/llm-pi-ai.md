---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Pi-Ai Provider

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm-pi-ai` is the pi-ai-backed multi-provider adapter that routes requests to many providers, OpenAI-compatible gateways, or self-hosted servers from one config. Its `providers` dictionary is the whole configuration surface; each key is a route name a request selects via `GenerateOptions.provider`. It can be mounted alongside the DeepSeek adapter without route collision.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-llm-pi-ai'
  config:
    providers:
      openai: { apiKeyEnv: OPENAI_API_KEY }
      anthropic:
        apiKeyEnv: ANTHROPIC_API_KEY
        models: [{ id: claude-sonnet-4-5, contextWindow: 200000 }]
```

A hand-declared gateway can set `api`, `baseURL`, and a non-empty `models` list with no code changes.

## Analogy

A multi-outlet power strip that also lets you declare your own outlet for a custom gateway.

## Related Concepts

- [[llm|LLM Layer]]
- [[multi-provider|Multi-Provider]]
- [[provider-auth|Provider Auth]]
- [[api-base-url|API Base URL]]

