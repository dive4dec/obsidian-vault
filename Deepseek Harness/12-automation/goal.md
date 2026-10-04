---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Goal

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-goal stores one persisted completion objective per session. It survives turns, resume, fork, and process restart, moves through active, paused, blocked, and complete phases, and rejects stale views through compare-and-set updates. It stores state only — it does not schedule work.

## Concrete Example

A composition loads @deepseek-ai/dsh-goal with defaultMaxGoalRounds: 256; the service keeps the latest goal in the session log and ctx.goals.get(agent) returns its phase, rounds started, and whether continuation is armed.

## Analogy

A mission statement with a scoreboard: it persists across meetings, but it does not make anyone do the work.

## Related Concepts

- [[goal-round|Goal Round]]
- [[goal-driver|Goal Round Driver]]
- [[goal-tool|Goal Tool]]
- [[goal-ui|Goal UI]]
