---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Migration

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill migration is moving a skill between versions, sources, or providers. `dsh-skill` owns name-resolution and lifecycle checks, rejecting a stale selection whose name changed between discovery and load, so a rename or provider switch surfaces as a clean fallback rather than a silent mismatch. The registry merges whichever provider now owns the winning candidate.

## Concrete Example

Replacing a local `dsh-skill-filesystem` skill with a bundled provider of the same name is resolved by the registry, and any stale in-flight selection is rejected with a warning.

## Analogy

Moving a recipe card from one binder to another and updating the index to point at the new location.

## Related Concepts

- [[skill-version|Skill Version]]
- [[skill-fallback|Skill Fallback]]
- [[skill-conflict|Skill Conflict]]
- [[skill-registry|Skill Registry]]
