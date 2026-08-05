---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Cron Job Timeout

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

Each cron job has a timeout that stops it if it takes too long, preventing one slow job from blocking others.

## Concrete Example

A job with a 60-second timeout gets killed if it runs longer than a minute.

## Analogy

Like an egg timer: when it dings you take the egg out whether it is done or not.

## Related Concepts

- [[3-minute-interrupt|3-minute interrupt]]
- [[cron-tick-lock|Cron Tick Lock]]
- [[cron-jobs|cron jobs]]
