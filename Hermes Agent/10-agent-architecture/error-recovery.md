---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Error Recovery

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

When a tool call fails or the model gives a bad response, error recovery handles it gracefully and lets the loop continue.

## Concrete Example

The terminal tool returns an error because the file is missing. Hermes tells the model, which tries a different path.

## Analogy

Like having an eraser handy: when you make a mistake you erase and try again.

## Related Concepts

- [[handle_function_call|handle_function_call]]
- [[tool_call-response|tool_call response]]
- [[agent-loop|Agent Loop]]
