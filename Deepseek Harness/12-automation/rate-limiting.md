---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Rate Limiting

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Rate limiting throttles how much automation may do at once: dsh-jobs-local's per-owner job cap, the dsh-tool-jobs maxConsecutiveWakes bound on self-exciting wake chains, the goal's maxGoalRounds, and dsh-schedule's fixed minimum intervals (every_seconds at least 60, cron no finer than one minute) all keep a runaway loop from saturating the host or the provider.

## Concrete Example

A busy agent chaining background jobs is woken at most maxConsecutiveWakes times in a row before further notices degrade to injection, and a 30-second every_seconds rule is rejected in favor of the 60-second floor.

## Analogy

A speed bump for the machine: not a wall, but enough to stop the stampede.

## Related Concepts

- [[concurrency|Concurrency]]
- [[scheduling-policy|Scheduling Policy]]
- [[goal|Goal]]
- [[jobs-local|Local Jobs]]
