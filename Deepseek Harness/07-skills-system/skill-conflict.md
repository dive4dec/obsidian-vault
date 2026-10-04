---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Conflict

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A conflict occurs when two skills claim the same name or trigger. `dsh-skill` resolves duplicate names predictably rather than letting both coexist, and same-name runtime registrations in one layer are first-wins with a warning. `dsh-skill-filesystem`'s rank-ordered roots give higher-rank sources precedence over lower-rank ones for the same skill name.

## Concrete Example

If the same skill name exists in both `<projectRoot>/.dsh/skills` (rank 100) and `<dshHome>/skills` (rank 400), the filesystem provider's rank order decides which wins in the merged catalog.

## Analogy

Two recipes with the same dish name — the binder keeps only one and notes which.

## Related Concepts

- [[skill-priority|Skill Priority]]
- [[skill-registry|Skill Registry]]
- [[skill-availability|Skill Availability]]
- [[skill-fallback|Skill Fallback]]
