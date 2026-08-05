---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# tool_call Response

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

After a tool runs, its result goes back to the model as a tool_call response so the model can decide what to do next.

## Concrete Example

The terminal tool returns a folder listing. That listing becomes a tool role message. The model reads it and decides to open a file.

## Analogy

Like getting your exam paper back with marks: you read the feedback and decide what to study next.

## Related Concepts

- [[handle_function_call|handle_function_call]]
- [[text-response|text response]]
- [[agent-loop|Agent Loop]]
