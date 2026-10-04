---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Timeout

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Bounding an agent run keeps it from hanging: operations are given limits so a runaway loop or tool call is stopped rather than left spinning. Because the standard loop has no built-in turn budget, bounding a runaway turn is a policy applied from a lifecycle extension point that cancels the turn when the bound is exceeded.

## Concrete Example

A turn-stopping policy on `dsh-agent-loop` cancels the turn when a turn or iteration budget is exceeded, preserving streamed text already delivered.

## Analogy

A watchdog that ends the job if it runs past the deadline.

## Related Concepts

- [[agent-error|Agent Error]]
- [[max-turns|Max Turns]]
- [[agent-safety|Agent Safety]]
