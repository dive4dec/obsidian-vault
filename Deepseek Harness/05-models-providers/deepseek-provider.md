---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# DeepSeek Provider

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-llm-deepseek` is the shared DeepSeek Messages transport that ships the provider routes `deepseek-official` and `deepseek-account`. It owns request configuration, model capabilities, reasoning, and image input; the API-key and account plugins add authentication and model discovery on top. It can run beside the pi-ai twin because their route names do not collide.

## Concrete Example

The default catalog advertises the image-capable `deepseek-flash` and the text-only `deepseek-v4-pro`, each with a 1,000,000-token context window; `baseURL` defaults to `https://api.deepseek.com/anthropic`.

## Analogy

The shared engine block that both the API-key and account cars bolt onto.

## Related Concepts

- [[llm|LLM Layer]]
- [[deepseek-api-key|DeepSeek API Key]]
- [[deepseek-account-llm|DeepSeek Account LLM]]
- [[model-id|Model ID]]

