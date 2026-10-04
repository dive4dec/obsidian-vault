---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Max Tokens

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`maxTokens` is the per-request cap on generated tokens. On the DeepSeek adapter it defaults to 256,000; a model's own cap and an explicit request value win over the default. The adapter materializes a configured output cap when a request omits one, so even uncapped requests stay bounded.

## Concrete Example

`config: { maxTokens: 256000 }` on `dsh-llm-deepseek-api-key`; for `purpose: 'session-title'` requests the adapter forces thinking off to reserve output for visible title text.

## Analogy

The word-count limit on an essay — you can write up to here and no more.

## Related Concepts

- [[model-config|Model Config]]
- [[context-window|Context Window]]
- [[temperature|Temperature]]
- [[streaming|Streaming]]

