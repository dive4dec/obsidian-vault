---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Fallback Chain

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

If the primary model fails, Hermes can fall back to a backup model so the conversation keeps going.

## Concrete Example

Model A is down. Hermes automatically switches to Model B and continues the chat without interruption.

## Analogy

Like a backup generator: when the power cuts out, the generator kicks in so the lights stay on.

## Related Concepts

- [[model-selection|Model Selection]]
- [[error-recovery|error recovery]]
- [[agent-loop|Agent Loop]]
