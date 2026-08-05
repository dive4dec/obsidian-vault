---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Turn Timeout

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

A turn timeout stops a single turn from running too long, protecting against tools that hang or freeze.

## Concrete Example

If a tool call takes more than 300 seconds the timeout fires and the turn ends with an error message.

## Analogy

Like an exam timer: when the bell rings you must stop writing.

## Related Concepts

- [[max_turns|max_turns]]
- [[error-recovery|error recovery]]
- [[agent-loop|Agent Loop]]
