---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Context Window

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The context window is the token capacity a model's input can hold, resolved from the exact model via `ctx.llm.resolveModelInfo().context`. On the DeepSeek route it defaults to `defaultContextWindow` (1,000,000) for models without an exact value, and the token meter compares measured pressure against it. The window governs how much history, tools, and prompt fit per turn.

## Concrete Example

`deepseek-flash` and `deepseek-v4-pro` each carry a 1,000,000-token context window; a request overflowing it fails with `CONTEXT_WINDOW_EXCEEDED`.

## Analogy

The size of the desk you can lay out — only so many papers fit at once.

## Related Concepts

- [[token-meter|Token Meter]]
- [[prompt-budget|Prompt Budget]]
- [[token-limit|Token Limit]]
- [[system-prompt-model|Model + System Prompt]]

