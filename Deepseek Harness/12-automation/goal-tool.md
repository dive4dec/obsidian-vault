---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Goal Tool

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-tool-goal is the model-facing half of the goal surface: get_goal, create_goal, and update_goal, which perform edit, pause, resume, complete, or blocked on the exact goal revision returned by a prior read. Create and edit require a direct top-level human request; autonomous rounds may complete or block.

## Concrete Example

update_goal(goal_id, revision, action, ...) with blockedAfterConsecutiveRounds: 3 lets a model self-block once the same condition has persisted for three rounds, with blocked_reason persisted under the stable code model-reported.

## Analogy

The dashboard the agent reads and writes: every change must quote the version it last saw.

## Related Concepts

- [[goal|Goal]]
- [[goal-round|Goal Round]]
- [[goal-driver|Goal Round Driver]]
- [[goal-ui|Goal UI]]
