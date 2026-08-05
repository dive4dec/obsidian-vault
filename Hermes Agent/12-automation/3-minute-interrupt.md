---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# 3-minute interrupt

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

If a cron job runs longer than 3 minutes, it gets interrupted to prevent stuck jobs from blocking the schedule.

## Concrete Example

A job that hangs on a slow API call gets cut off at 3 minutes and marked as failed.

## Analogy

Like an exam with a strict time limit: when time is up you must stop.

## Related Concepts

- [[cron-jobs|cron jobs]]
- [[turn-timeout|Turn Timeout]]
- [[cron-tick-lock|Cron Tick Lock]]
