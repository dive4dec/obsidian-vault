---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Token Limit

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Token limits are the bounds on how many tokens a request may carry, both for the input context and the generated output. The DeepSeek adapter declares a `defaultContextWindow` (1,000,000) as a capacity fallback and a `maxTokens` output cap (256,000); a model's own cap and an explicit request value win over the default.

## Concrete Example

A request whose retained images exceed `maxRequestFilesBytes` fails with `IMAGE_OFFLOAD_REQUIRED`; exceeding the context window fails with `CONTEXT_WINDOW_EXCEEDED`.

## Analogy

The speed limit sign — the road sets the maximum, and a faster posted limit for this stretch wins.

## Related Concepts

- [[max-tokens|Max Tokens]]
- [[context-window|Context Window]]
- [[prompt-budget|Prompt Budget]]
- [[model-error|Model Error]]

