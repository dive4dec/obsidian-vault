---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Plan

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The plan is the artifact plan mode produces: the agent's proposed approach, explored and designed before execution. It is presented to the user so they can see exactly what the agent intends to do before it spends turns acting on it.

## Concrete Example

After `/plan`, the agent returns a finished plan for review; the user can approve it, return feedback for more planning, or exit with `/plan off`.

## Analogy

A sketch of the build before the first brick is laid.

## Related Concepts

- [[plan-mode|Plan Mode]]
- [[plan-approval|Plan Approval]]
- [[trajectory|Trajectory]]
