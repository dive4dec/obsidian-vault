---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Message Role Alternation

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Messages must alternate between user and assistant roles. The model expects this pattern to follow the conversation correctly.

## Concrete Example

The sequence goes user, assistant, tool, assistant, tool, assistant. Hermes keeps this order so the model does not get confused.

## Analogy

Like a tennis rally: the ball goes back and forth between two sides in a steady rhythm.

## Related Concepts

- [[prompt-builder|prompt builder]]
- [[tool_call-response|tool_call response]]
- [[text-response|text response]]
