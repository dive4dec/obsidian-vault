---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Environment Hints

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Environment hints tell the model about the world around it: the operating system, current folder, date, and available tools.

## Concrete Example

The prompt includes lines like Host: Linux and Current working directory: /home/student so the model knows where it is running.

## Analogy

Like a map pinned to the classroom wall showing which building you are in and where the exits are.

## Related Concepts

- [[prompt-builder|prompt builder]]
- [[tool-dispatch|tool dispatch]]
- [[system-prompt|system prompt]]
