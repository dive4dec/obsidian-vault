---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Cron Tick Lock

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

The tick lock prevents two copies of the same cron job from running at the same time.

## Concrete Example

Job A is still running when the next tick fires. The lock blocks the second run until the first finishes.

## Analogy

Like a fitting room lock: only one person can use it at a time.

## Related Concepts

- [[cron-jobs|cron jobs]]
- [[gatewaylock|gateway.lock]]
- [[hermes-cron-run|hermes cron run]]
