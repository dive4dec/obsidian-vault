---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Priority

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Priority is the order applied when multiple skills match, so the registry can pick a single winner. `dsh-skill-filesystem` scans roots in an explicit rank order (project-dsh 100, project-agents 200, custom 300, user-dsh 400, user-agents 500, bundled 600), and the merged catalog is sorted by name with no provider-specific ordering. This rank ordering is what breaks ties between same-name skills.

## Concrete Example

`dsh-skill-filesystem`'s rank table puts a project's `.dsh/skills` skill ahead of a user's `<dshHome>/skills` skill of the same name.

## Analogy

A tie-breaker list that decides which same-named recipe card to keep.

## Related Concepts

- [[skill-conflict|Skill Conflict]]
- [[skill-registry|Skill Registry]]
- [[skill-discovery|Skill Discovery]]
- [[skill-fallback|Skill Fallback]]
