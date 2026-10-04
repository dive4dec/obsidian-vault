---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Multi-Provider

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Multi-provider is configuring more than one LLM provider in one composition. The pi-ai adapter's `providers` dictionary declares many routes at once, and the DeepSeek adapter can be mounted beside it because their route names do not collide. A request selects its route with `GenerateOptions.provider`.

## Concrete Example

One config can carry `providers: { openai: {...}, anthropic: {...}, 'acme-gateway': {...} }` alongside the `deepseek-official` route, each selectable by name.

## Analogy

A toolbox with several different wrenches, each keyed to a different bolt.

## Related Concepts

- [[llm-pi-ai|Pi-Ai Provider]]
- [[provider-registry|Provider Registry]]
- [[provider-auth|Provider Auth]]
- [[llm|LLM Layer]]

