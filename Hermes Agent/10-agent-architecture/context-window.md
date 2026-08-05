---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Context Window

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The context window is the maximum number of tokens the model can see at once. It limits how much history fits in one prompt.

## Concrete Example

A model with a 32k window can hold about 24 pages of text. If the conversation is longer, old parts get compressed.

## Analogy

Like the size of a whiteboard: once it is full you have to erase old notes to write new ones.

## Related Concepts

- [[token-budget|Token Budget]]
- [[context-compression-trigger|context compression trigger]]
- [[prompt-caching|prompt caching]]
