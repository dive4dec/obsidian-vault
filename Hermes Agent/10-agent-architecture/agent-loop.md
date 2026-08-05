---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Agent Loop

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The agent loop is the heart of Hermes. It keeps the conversation going turn after turn until the task is done or a limit is reached.

## Concrete Example

Each turn the agent reads the latest messages, builds a prompt, calls the model, and handles the response. If the model requests a tool, the loop runs again.

## Analogy

Like a dishwasher cycle: fill, wash, rinse, drain, repeat until the dishes are clean.

## Related Concepts

- [[run_conversation|run_conversation]]
- [[max_turns|max_turns]]
- [[iteration|iteration]]
- [[tool-dispatch|tool dispatch]]
