---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Lifecycle

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

An agent's lifecycle is the arc from being started to settling and returning. A subagent is created, runs its task to completion, and is disposed along a single quiescent path; a continuable child settles when its activity finishes, its inbox empties, and it has no owned children. Understanding this arc is what lets a parent know when a result is actually final.

## Concrete Example

`dsh-subagent-in-process-driver` drives one task to completion and returns the child's final output through a single quiescent disposal path.

## Analogy

Hire, work, hand over the result, and clock out — the whole shift.

## Related Concepts

- [[subagent-driver|Subagent Driver]]
- [[agent-state|Agent State]]
- [[goal-driver|Goal Round Driver]]
- [[agent-error|Agent Error]]
