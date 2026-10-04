---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Registry

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

The skill registry is `dsh-skill`, the single service every provider and consumer talks to via `ctx.skills`. It merges every provider's catalog into one, resolves duplicate names predictably, validates entries, tolerates unavailable sources, and loads a selected skill's body on demand. Same-name runtime registrations in one layer are first-wins with a warning.

## Concrete Example

`ctx.skills.register(...)` adds an in-memory skill with a default invocation policy and `runtime` provider label; `ctx.skills.registerProvider(...)` contributes a provider catalog and returns a disposer.

## Analogy

A central catalog desk that dedupes and merges submissions from every shelf.

## Related Concepts

- [[skill-system|Skill System]]
- [[skill-discovery|Skill Discovery]]
- [[skill-loader|Skill Loader]]
- [[skill-availability|Skill Availability]]
