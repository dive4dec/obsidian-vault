---
tags: [Skills-System]
domain: Skills System
---

# Curator Run

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

Manually triggering the curator to do a maintenance pass right now, instead of waiting for the next scheduled run.

## Concrete Example

hermes curator run starts a pass immediately. It scans all skills, archives stale ones, updates descriptions, and reports: Archived 1, updated 2, no issues found.

## Analogy

Pressing the clean now button on a robot vacuum - instead of waiting for the scheduled time, you tell it to clean right now. Curator run triggers immediate maintenance.

## Related Concepts

- [[curator|Curator]]
- [[curator-status|Curator Status]]
- [[stale-skills|Stale Skills]]
