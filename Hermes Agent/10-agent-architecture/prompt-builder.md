---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Prompt Builder

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The prompt builder assembles all the pieces into one big prompt each turn: system prompt, conversation history, tool definitions, and environment hints.

## Concrete Example

Hermes collects your messages, the tool list, the current working folder, and the system prompt, then packs them into one request to the model.

## Analogy

Like packing a lunchbox: you put rice, meat, vegetables, and a note together before heading to school.

## Related Concepts

- [[system-prompt|system prompt]]
- [[environment-hints|environment hints]]
- [[tool-dispatch|tool dispatch]]
- [[prompt-caching|prompt caching]]
