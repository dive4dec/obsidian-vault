---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Goal Round Driver

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-goal-round-driver keeps an active goal making progress while the agent is idle, continuation is armed, and round capacity remains. It takes no configuration: the goal defines the round cap, and it records a blocker with the stable code round-limit when the cap is exhausted.

## Concrete Example

Mounted beside dsh-goal and dsh-tool-goal, it queues one goal-round prompt per idle point naming the objective, round number, and cap; after a session resume or fork the goal stays disarmed until an explicit human-authorized resume.

## Analogy

A metronome for the agent: steady beats toward the goal until someone taps stop or the beats run out.

## Related Concepts

- [[goal|Goal]]
- [[goal-round|Goal Round]]
- [[unattended|Unattended]]
- [[workflow|Workflow]]
