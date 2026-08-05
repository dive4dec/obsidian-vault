---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# tool_use_enforcement

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

This rule makes sure the model actually uses tools when needed instead of guessing answers or making things up.

## Concrete Example

The system prompt says you MUST use tools to read files. If the model tries to answer without reading, the loop sends it back to use a tool.

## Analogy

Like a teacher who says show your working: you cannot just write the answer, you must prove each step.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[system-prompt|system prompt]]
- [[agent-loop|Agent Loop]]
