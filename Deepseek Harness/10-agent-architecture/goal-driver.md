---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Goal Round Driver

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The driver automatically continues an active goal in the same session while the agent is idle, continuation is armed, and the round allowance remains. Each round gives the model another turn toward the objective; only goal rounds that reach model history consume the allowance, and exhaustion records a blocker. It has no configuration — the goal defines the limit and `dsh-tool-goal` defines when repeated blocking stops.

## Concrete Example

Mount `dsh-goal-round-driver` with `dsh-goal` and `dsh-tool-goal` for unattended multi-round progress; omit it when every step needs human steering.

## Analogy

A metronome that keeps nudging the worker for another pass while the objective isn't met.

## Related Concepts

- [[goal|Goal]]
- [[goal-round|Goal Round]]
- [[agent-lifecycle|Agent Lifecycle]]
