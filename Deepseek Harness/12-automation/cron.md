---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Cron

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Schedule's cron selector runs a reminder on a five-field Vixie cron expression evaluated in an explicit IANA zone. The dialect is strict: L, W, #, month or weekday names, macros like @daily, and six-field expressions are all rejected with invalid_rule.

## Concrete Example

A rule like {"cron":{"expression":"*/15 9-17 * * 1-5","time_zone":"Asia/Shanghai"}} fires every 15 minutes during work hours on weekdays; because the dialect has five fields the smallest interval is one minute.

## Analogy

The classic crontab line, tightened so only one unambiguous spelling survives.

## Related Concepts

- [[schedule|Schedule]]
- [[trigger|Trigger]]
- [[scheduled-report|Scheduled Report]]
- [[event|Event]]
