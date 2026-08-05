---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Token Budget

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The token budget is how many tokens the model can process in one turn. Longer conversations use more tokens.

## Concrete Example

A model with a 128000 token budget can handle a long chat, but when it gets close to the limit, old messages get compressed.

## Analogy

Like a data plan on your phone: when you use too much, the system warns you and slows things down.

## Related Concepts

- [[context-compression-trigger|context compression trigger]]
- [[prompt-caching|prompt caching]]
- [[max_turns|max_turns]]
