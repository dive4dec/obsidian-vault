---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Config

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Model config is the per-model and per-route configuration that shapes each call: sampling (`temperature`, `maxTokens`), `reasoningEffort`, and image budgets. The adapter validates an explicit or configured reasoning effort against the exact model before any provider I/O and materializes an adapter-configured output cap when a request omits one.

## Concrete Example

On `dsh-llm-deepseek-api-key`: `reasoningEffort: high` (off | low | high | max), `maxTokens: 256000`, and image caps like `maxImagesPerRequest: 600`.

## Analogy

The dial settings on a camera — exposure, focus, and frame size for each shot.

## Related Concepts

- [[max-tokens|Max Tokens]]
- [[temperature|Temperature]]
- [[context-window|Context Window]]
- [[reasoning-model|Reasoning Model]]

