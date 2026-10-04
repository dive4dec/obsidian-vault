---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Temperature

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`temperature` is a sampling knob in `GenerateOptions` (which on `dsh-llm` is limited to `temperature`, `maxTokens`, and `stop`). The DeepSeek adapter forwards an explicit `temperature`; DeepSeek accepts it with thinking enabled but ignores its value in that mode. It is the only sampling parameter the core vocabulary currently carries.

## Concrete Example

`ctx.llm.stream({ ..., messages, temperature })` — the adapter forwards an explicit `temperature` to the wire; no `top_p` or penalty fields are mapped.

## Analogy

The creativity dial — lower is precise and predictable, higher is looser.

## Related Concepts

- [[model-config|Model Config]]
- [[max-tokens|Max Tokens]]
- [[response-format|Response Format]]
- [[reasoning-model|Reasoning Model]]

