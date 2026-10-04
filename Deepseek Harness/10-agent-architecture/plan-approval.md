---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Plan Approval

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Plan approval is the gate that turns a proposed plan into execution: the user reviews the finished plan and approves to continue, or returns feedback for more planning. It is the human checkpoint that keeps plan mode from acting on an unreviewed design.

## Concrete Example

In `dsh-plan-mode`, approving the plan review lets the agent proceed; declining sends it back for more planning or `/plan off` exits.

## Analogy

Signing off on the design doc before the build starts.

## Related Concepts

- [[plan|Plan]]
- [[plan-mode|Plan Mode]]
- [[user-questions|User Questions]]
