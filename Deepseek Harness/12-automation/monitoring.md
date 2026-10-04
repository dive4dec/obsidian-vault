---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Monitoring

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Monitoring uses dsh as a sensor: a schedule polls a system (queue depth, deploy health, build failures) on a rule, and the agent's tools inspect the workspace, run commands, and write up what it finds. Because reminders bind to their original session, the whole history of checks accumulates in one place.

## Concrete Example

A {"every_seconds":300} task with the prompt Check the deploy queue and flag anything stuck re-checks every five minutes and reports anomalies in the monitoring session.

## Analogy

A night-shift security guard on a fixed patrol route, logging each round in the same notebook.

## Related Concepts

- [[scheduled-report|Scheduled Report]]
- [[alerting|Alerting]]
- [[webhook|Webhook]]
- [[schedule|Schedule]]
