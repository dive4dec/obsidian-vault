---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model ID

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The model id is the provider-owned identifier a request passes through to the wire, such as `deepseek-flash` or `deepseek-v4-pro`. On the DeepSeek route the id passes through unchanged, so new models need no re-registration; unlisted ids still pass through as text-only routes. GUI selection, however, requires a catalog entry.

## Concrete Example

`ctx.llm.stream({ provider: 'deepseek-official', model: 'deepseek-v4-pro', ... })` — the id reaches the wire verbatim; `ctx.llm.listModels('deepseek-official')` reads the advisory catalog.

## Analogy

A room number — the provider uses it to find the exact model to serve.

## Related Concepts

- [[deepseek-provider|DeepSeek Provider]]
- [[model-config|Model Config]]
- [[model-selection|Model Selection]]
- [[model-compatibility|Model Compatibility]]

