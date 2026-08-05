---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# run_conversation

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

This is the main function that drives the whole agent loop. Without it the agent would only answer one message and stop.

## Concrete Example

You type a question. run_conversation starts, calls the model, runs tools, and loops until the model gives a final text answer with no tool calls.

## Analogy

Like the conductor of an orchestra who keeps the music flowing until the piece ends.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[max_turns|max_turns]]
- [[system-prompt|system prompt]]
- [[text-response|text response]]
