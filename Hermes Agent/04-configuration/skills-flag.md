---
tags: [Configuration]
domain: Configuration
---

# Skills Flag

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A global flag that pre-loads specific skills for the session.

## Concrete Example

hermes --skills debugging,tdd chat. Hermes starts with the debugging and TDD skills loaded. No need to /skill load them manually.

## Analogy

Pre-loading apps before a trip - you download maps and translation before you go. The skills flag pre-loads skills before the session starts.

## Related Concepts

- [[global-flags|Global Flags]]
- [[config-yaml|Config YAML]]
- [[skills-system|Skills System]]
