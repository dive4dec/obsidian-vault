---
tags: [Configuration]
domain: Configuration
---

# Profile Flag

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A global flag that selects which profile to use. Profiles have separate config, skills, sessions, and memory.

## Concrete Example

hermes --profile work chat. Hermes uses the work profile: work config, work skills, work memory. Completely separate from the default profile.

## Analogy

A school ID vs a library card - different cards for different contexts. The profile flag picks which context (profile) Hermes uses.

## Related Concepts

- [[global-flags|Global Flags]]
- [[config-yaml|Config YAML]]
- [[profiles|Profiles]]
