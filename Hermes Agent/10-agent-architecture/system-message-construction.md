---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# System Message Construction

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Hermes builds the system message by combining the base prompt, personality, environment hints, and tool list into one coherent instruction set.

## Concrete Example

The final system message reads: You are Hermes, a helpful agent. Host: Linux. Tools: terminal, read_file, write_file. Be concise and friendly.

## Analogy

Like a job description that combines role, rules, and tools into one document.

## Related Concepts

- [[system-prompt|system prompt]]
- [[prompt-builder|prompt builder]]
- [[environment-hints|environment hints]]
