---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Automation

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Automation is running dsh with no human in the loop. The main paths are the headless profile (one task, one answer, exit), background jobs, scheduled reminders, goals that self-continue across rounds, and webhook-triggered sessions.

## Concrete Example

dsh --profile headless "run the tests" completes a single task and exits 0, and dsh-goal plus dsh-goal-round-driver keep an objective advancing without further input.

## Analogy

Like a CI pipeline: you define the work, the machine runs it, and you inspect the result.

## Related Concepts

- [[headless|Headless]]
- [[goal|Goal]]
- [[job|Job]]
- [[webhook|Webhook]]
