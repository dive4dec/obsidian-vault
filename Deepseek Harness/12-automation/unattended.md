---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Unattended

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Unattended means running with no human present, which forces every interaction to have a non-interactive answer: headless takes the task from an argument or stdin, jobs notify instead of asking, goals self-continue only while armed, and permissions must already allow the work.

## Concrete Example

A dsh --profile headless run in a cron step, a goal driven by dsh-goal-round-driver, and background jobs whose completion wakes the idle agent together form the unattended stack.

## Analogy

Cruise control: the car keeps going, but every lane change had to be pre-approved.

## Related Concepts

- [[automation|Automation]]
- [[approval-automation|Approval in Automation]]
- [[goal|Goal]]
- [[headless|Headless]]
