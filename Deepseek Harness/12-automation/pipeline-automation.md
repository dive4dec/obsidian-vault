---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Pipeline Automation

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Pipeline automation composes dsh's pieces into an end-to-end unattended flow: batch or CI runs for the build, jobs for long-running work inside a session, schedules for the recurring gates, and webhooks for the external events that start the whole thing.

## Concrete Example

A nightly pipeline can run dsh --profile headless over each changed module in a loop, let the agent background the slow suite as a job, and have a daily schedule reminder report the results in a standing session.

## Analogy

A factory floor: stations, conveyors, and shift changes, all running without a foreman in the room.

## Related Concepts

- [[ci|CI]]
- [[cd|CD]]
- [[batch|Batch]]
- [[schedule|Schedule]]
