---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Trigger

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A trigger is what starts an automated run: a wall-clock rule in dsh-schedule (after_seconds, at, every_seconds, daily, weekly, cron), a webhook delivery dispatched through ctx.webhookRuntime, or a goal round queued by the driver at idle. The trigger decides when; the rule or prompt decides what.

## Concrete Example

A cron trigger with {"expression":"*/15 9-17 * * 1-5"} fires the reminder's prompt as a user-role message in its original session at each matching minute.

## Analogy

The fuse on the firecracker: it does the exploding, not the deciding.

## Related Concepts

- [[event|Event]]
- [[cron|Cron]]
- [[webhook|Webhook]]
- [[schedule|Schedule]]
