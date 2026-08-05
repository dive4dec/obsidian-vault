---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Cron Missed Runs

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

If the gateway is down when a cron job is scheduled, the missed run can be detected and optionally caught up.

## Concrete Example

The gateway was down at 7am. When it starts at 8am it sees the missed weather job and can run it immediately.

## Analogy

Like a DVR recording a show you missed: you can watch it when you get home.

## Related Concepts

- [[cron-jobs|cron jobs]]
- [[hermes-gateway-status|hermes gateway status]]
- [[cron-tick-lock|Cron Tick Lock]]
