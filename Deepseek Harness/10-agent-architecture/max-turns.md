---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Max Turns

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A cap on how many iterations the loop may run before it must stop, so a runaway agent cannot spin forever. dsh's standard loop has no built-in turn budget of its own — bounding runaway turns is a policy applied from a lifecycle extension point such as `agent/turn-stopping`, which cancels the turn when the limit is hit.

## Concrete Example

A turn-stopping policy attached to `dsh-agent-loop` counts loop iterations and cancels the turn once the configured `max-turns` value is reached.

## Analogy

A timer on a microwave: it guarantees the job stops, no matter how much is left.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[turn|Turn]]
- [[agent-timeout|Agent Timeout]]
- [[agent-safety|Agent Safety]]
