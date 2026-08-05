---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Cron Job enabled_toolsets

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

You can restrict which tools a cron job can use, limiting it to only what it needs for safety.

## Concrete Example

A report cron job only has read_file and terminal enabled. It cannot write files or delete anything.

## Analogy

Like giving a substitute teacher only the keys to the classroom, not the whole school.

## Related Concepts

- [[cron-jobs|cron jobs]]
- [[tool-dispatch|tool dispatch]]
- [[hermes-cron-create|hermes cron create]]
