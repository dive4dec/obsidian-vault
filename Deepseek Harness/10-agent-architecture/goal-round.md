---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Goal Round

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A goal round is one continuation pass toward the persisted goal — the model gets another turn and either advances the objective, records a blocker, or exhausts the round allowance. Only rounds that actually reach model history consume the allowance, so wasted turns do not eat into the budget.

## Concrete Example

`dsh-goal-round-driver` advances one round at a time while idle and armed; when the allowance runs out it records a blocker instead of continuing.

## Analogy

A single lap around the track toward the finish line.

## Related Concepts

- [[goal|Goal]]
- [[goal-driver|Goal Round Driver]]
- [[turn|Turn]]
