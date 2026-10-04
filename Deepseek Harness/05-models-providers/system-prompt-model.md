---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model + System Prompt

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

System-prompt sizing is how the assembled system prompt fits a model's context and how the provider reads it. The DeepSeek adapter reports `systemPromptUpdate: 'in-history'` when a model reads the latest `system` message at any position as the effective prompt; otherwise only a leading system message is read. The agent loop appends a changed prompt after cached history instead of rewriting the leading system message.

## Concrete Example

The default `deepseek-flash` entry declares `in-history`, so a prompt change mid-conversation is appended after the cached history, keeping the earlier prefix reusable.

## Analogy

Whether the instructions are pinned to the top of the desk or can be restated at the bottom of the page.

## Related Concepts

- [[context-window|Context Window]]
- [[llm-cache|LLM Cache]]
- [[prompt-budget|Prompt Budget]]
- [[model-config|Model Config]]

