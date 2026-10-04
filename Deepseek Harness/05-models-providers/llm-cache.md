---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# LLM Cache

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The LLM cache is provider-side KV-cache reuse of an unchanged request prefix. DeepSeek reports cache hits in its usage (cache-read / cache-write tokens), and the token meter anchors a measurement to provider usage only when the request envelope is identical. A changed system prompt, tool schema, history, or image budget can prevent reuse from the first affected token.

## Concrete Example

On a `systemPromptUpdate: in-history` catalog entry, a changed system prompt is appended after the cached history so the earlier prefix stays reusable; usage then reports the cache-read tokens.

## Analogy

A photocopy of a long document — you reuse the identical pages and only re-type what changed.

## Related Concepts

- [[context-window|Context Window]]
- [[usage-tracking|Usage Tracking]]
- [[system-prompt-model|Model + System Prompt]]
- [[token-meter|Token Meter]]

