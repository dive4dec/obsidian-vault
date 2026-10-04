---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Scheduled Report

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A scheduled report is a recurring dsh-schedule task whose prompt produces a report in its original session: the reminder arrives as a user-role message, the agent runs the work, and the report lands in the conversation. Recurring tasks deliver only the latest missed occurrence per task, so a long outage never stacks up a backlog.

## Concrete Example

schedule_create with a weekly rule {"time":"09:00:00","time_zone":"Asia/Shanghai","weekdays":[1]} and the prompt Write the weekly status report from the session history delivers every Monday morning.

## Analogy

The morning briefing: same desk, same time, freshest news only — no pile of yesterday's papers.

## Related Concepts

- [[schedule|Schedule]]
- [[cron|Cron]]
- [[monitoring|Monitoring]]
- [[event|Event]]
