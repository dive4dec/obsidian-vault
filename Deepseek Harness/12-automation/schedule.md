---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Schedule

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-schedule is a Host-wide service for durable reminders bound to a Session: one-shot after_seconds or at, fixed-rate every_seconds, daily, weekly, and five-field cron. Due reminders arrive as follow-up user messages in their original Session, and the Host restores a cold Session when delivery is due.

## Concrete Example

schedule_create with {"prompt":"Check the deploy","title":"Deploy check","cron":{"expression":"*/15 9-17 * * 1-5","time_zone":"Asia/Shanghai"}} runs on weekdays; deliveryHistoryDays (30) and deliveryHistoryRecords (200) bound the saved history.

## Analogy

A wall-clock with sticky notes: at the right moment it puts a message on the right desk.

## Related Concepts

- [[cron|Cron]]
- [[schedule-bundle|Schedule Bundle]]
- [[trigger|Trigger]]
- [[scheduled-report|Scheduled Report]]
