---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Prompt Budget

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Prompt budget is fitting the assembled prompt — system prompt, history, tools, and images — within a model's context window. The token meter measures `contextPressure` and `projectedTokens` (what the next request's prompt would cost), and the DeepSeek adapter requires that a model's context window exceed the effective `maxTokens` plus the compaction policy's `headroomTokens`.

## Concrete Example

`contextPressure.projectedTokens` estimates the next request's prompt cost; when pressure nears the window, proactive compaction shrinks the context before `CONTEXT_WINDOW_EXCEEDED`.

## Analogy

Budgeting the desk space before you lay out the papers, so nothing overflows.

## Related Concepts

- [[token-meter|Token Meter]]
- [[context-window|Context Window]]
- [[token-limit|Token Limit]]
- [[offload|Image Offload]]

