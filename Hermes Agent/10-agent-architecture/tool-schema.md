---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Tool Schema

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Each tool has a schema that describes its name, what it does, and what parameters it accepts. The model reads schemas to know how to call tools.

## Concrete Example

The terminal tool schema says it needs a command string and has an optional timeout number. The model follows this format to call it.

## Analogy

Like a recipe card listing ingredients and steps so anyone can follow it.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[handle_function_call|handle_function_call]]
- [[prompt-builder|prompt builder]]
