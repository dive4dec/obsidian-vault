---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Profile Isolation

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

Each profile is completely independent. Config, skills, sessions, memory, cron jobs - all separate. No cross-contamination.

## Concrete Example

Profile A memory: User likes Python. Profile B memory: User likes JavaScript. Switching profiles switches everything. No leakage.

## Analogy

Separate bedrooms in a house - each person has their own room. Profile isolation gives each profile its own space.

## Related Concepts

- [[profiles|Profiles]]
- [[profile-config|Profile Config]]
- [[hermes-profile|Hermes Profile]]
