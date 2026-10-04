---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Goal Round

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A goal round is one continuation turn toward the persisted goal: the driver's goal-sourced user message, the model's work, and the state updates at the end. Only rounds that actually enter model history consume the maxGoalRounds allowance.

## Concrete Example

After create_goal(objective, max_goal_rounds), each idle point queues a round that names the round number and cap; the model can complete the goal or record the same blocking condition for three consecutive rounds to be blocked.

## Analogy

One lap of the track: each lap is logged, and only finished laps count against the limit.

## Related Concepts

- [[goal|Goal]]
- [[goal-driver|Goal Round Driver]]
- [[goal-tool|Goal Tool]]
- [[state|Job State]]
