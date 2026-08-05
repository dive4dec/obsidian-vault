---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Graceful Shutdown

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

When you exit Hermes, it saves state, finishes running tools, and closes connections cleanly.

## Concrete Example

You type exit. Hermes finishes the current tool, saves the memory, and closes the gateway before quitting.

## Analogy

Like a shop closing routine: count the cash, lock the doors, turn off the lights.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[conversation-state|Conversation State]]
- [[memory-store|Memory Store]]
