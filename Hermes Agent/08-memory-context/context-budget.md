---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Context Budget

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

The total context space available. The agent must budget it across system prompt, memory, conversation, and files. Running out means compression or loss.

## Concrete Example

Budget: 128K tokens. System prompt: 2K, memory: 5K, conversation: 100K, files: 21K. Total: 128K. If conversation grows, something else must shrink (compression).

## Analogy

A monthly allowance - you budget across food, transport, and fun. If one grows, another shrinks. Context budget allocates tokens across all context sources.

## Related Concepts

- [[context-window|Context Window]]
- [[context-prioritisation|Context Prioritisation]]
- [[context-compression|Context Compression]]
