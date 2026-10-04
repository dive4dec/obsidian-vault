---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Scheduling Policy

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Scheduling policy is the when-and-whether layer: the six timing selectors choose when a reminder fires, the round cap and blocked threshold choose how far a goal may self-continue, and the registry's capacity check decides whether a job may even start. Each policy is explicit and inspectable rather than implicit.

## Concrete Example

A goal created with max_goal_rounds: 50, a weekly rule on weekdays [1,3], and maxConcurrentJobsPerOwner: 10 together bound the when of three different automation paths.

## Analogy

The house rules posted at the door: how often you may knock, how long you may stay, and how many at once.

## Related Concepts

- [[schedule|Schedule]]
- [[goal-driver|Goal Round Driver]]
- [[concurrency|Concurrency]]
- [[rate-limiting|Rate Limiting]]
