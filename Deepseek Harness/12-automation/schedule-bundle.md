---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Schedule Bundle

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-experimental-schedule-bundle is the optional bundle that turns Schedule on in a Web profile; shipped profiles leave it off. Enabling it from the Plugins page (Automation tasks, alarm clock icon) inserts the time-context, schedule, and ui-schedule rows.

## Concrete Example

Selecting the bundle appends it to the profile's dsh.profile.bundles list; the agent then receives schedule_create, schedule_list, schedule_update, and schedule_delete, and stored tasks remain on disk if you disable it later.

## Analogy

An expansion pack for the GUI: the features are shipped but dark until you install the pack.

## Related Concepts

- [[schedule|Schedule]]
- [[timer|Timer]]
- [[cron|Cron]]
- [[trigger|Trigger]]
