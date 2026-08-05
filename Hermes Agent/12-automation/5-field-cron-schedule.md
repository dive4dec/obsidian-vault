---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# 5-field cron schedule

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

The classic cron format uses five fields: minute, hour, day of month, month, and day of week.

## Concrete Example

You write 30 7 * * 1-5 to run at 7:30am on weekdays. Each field controls one part of the schedule.

## Analogy

Like a combination lock: each dial sets one digit and together they define the exact time.

## Related Concepts

- [[schedule-formats|schedule formats]]
- [[every-phrase-schedule|every phrase schedule]]
- [[iso-timestamp-schedule|ISO timestamp schedule]]
