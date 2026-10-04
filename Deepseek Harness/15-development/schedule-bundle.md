---
tags: [DSH-Development]
domain: Development & Internals
---

# Schedule Bundle (Exp)

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-experimental-schedule-bundle` inserts the three Schedule rows the shipped Web composition leaves out: `time-context`, `schedule`, and `ui-schedule`. It is a configuration-only package — `src/index.ts` is an empty module and the `cordis.patch.yml` is the runtime content — and shipped profiles leave it switched off.

## Concrete Example

Enable Automation tasks from the Web sidebar's Plugins page; the root Agent then receives `schedule_create`, `schedule_list`, `schedule_update`, and `schedule_delete`, and each eligible step appends one clock reading with the current time and elapsed time since the preceding model-visible message.

## Analogy

It is an alarm-clock module that bolts time awareness and a task page onto the Web profile.

## Related Concepts

- [[experimental|Experimental]]
- [[bundle|Bundling]]
- [[plugin-manager|Plugin Manager]]
