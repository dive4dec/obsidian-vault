---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job State

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Job and automation state is what persists versus what dies. dsh-jobs-local records are in-memory and vanish with the process; schedule tasks persist in the schedule domain and survive Host restarts; goal state lives in the session log via durable goal/change events, with only the armed/disarmed flag staying process-local.

## Concrete Example

After a Host restart, a due schedule task is still delivered and a goal is still there — but disarmed until an explicit resume — while every in-flight job record is gone.

## Analogy

The difference between a sticky note and a ledger: one dies with the desk, the other outlives the building.

## Related Concepts

- [[job|Job]]
- [[goal|Goal]]
- [[schedule|Schedule]]
- [[job-resume|Resume a Job]]
