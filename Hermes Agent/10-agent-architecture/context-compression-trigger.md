---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Context Compression Trigger

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

When the conversation gets too long, a compression trigger shrinks old messages so the prompt stays within the model limit.

## Concrete Example

After 20 tool calls the prompt is huge. The trigger summarizes early messages into a compact note, freeing space for new ones.

## Analogy

Like cleaning your backpack: you remove old worksheets and keep only what you still need.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[prompt-builder|prompt builder]]
- [[prompt-caching|prompt caching]]
