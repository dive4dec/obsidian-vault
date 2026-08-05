---
tags: [Skills-System]
domain: Skills System
---

# Usage JSON

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

A small file (.usage.json) next to each skill that records usage statistics: times used, last used date, success rate.

## Concrete Example

debugging/.usage.json contains: {used_count: 42, last_used: 2026-08-03, success_rate: 0.88}. The curator reads this to decide if the skill is stale.

## Analogy

A mileage log in a car - it tracks total miles, last trip date, fuel efficiency. .usage.json tracks a skill usage stats the same way.

## Related Concepts

- [[skill-usage-tracking|Skill Usage Tracking]]
- [[stale-skills|Stale Skills]]
- [[curator|Curator]]
