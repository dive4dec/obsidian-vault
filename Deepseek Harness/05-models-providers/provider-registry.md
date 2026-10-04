---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Provider Registry

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The provider registry is the topology owner inside `dsh-llm`: adapter routes, configurable-provider entries, and discovery offers all register here and are disposed with their fiber. `ctx.llm.listProviders()` reports the registered routes in registration order, and registering the same route twice fails with `DUPLICATE_ADAPTER`.

## Concrete Example

After mounting the DeepSeek and pi-ai adapters, `ctx.llm.listProviders()` lists both routes; mounting a second adapter for `deepseek-official` throws `DUPLICATE_ADAPTER`.

## Analogy

The switchboard that maps each extension number to exactly one phone.

## Related Concepts

- [[llm|LLM Layer]]
- [[multi-provider|Multi-Provider]]
- [[provider-auth|Provider Auth]]
- [[llm-api-extensions|DeepSeek API Extensions]]

