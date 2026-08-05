---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Profile Cloning

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

Create a new profile by copying an existing one. Command: hermes profile create NAME --clone SOURCE.

## Concrete Example

hermes profile create test --clone work. Test profile has same config, skills, and settings as work. Modify test safely. Work is untouched.

## Analogy

Copying a document to edit - you keep the original safe. Profile cloning copies a profile to modify safely.

## Related Concepts

- [[hermes-profile|Hermes Profile]]
- [[profiles|Profiles]]
- [[profile-config|Profile Config]]
