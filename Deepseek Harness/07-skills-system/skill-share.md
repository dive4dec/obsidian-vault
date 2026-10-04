---
tags: [DSH-Skills]
domain: Skills System
---

# Share a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Sharing a skill means making it available to another profile, deployment, or team. In dsh a skill travels either as a file dropped into a scanned root (so `dsh-skill-filesystem` discovers it there) or as a bundled `@deepseek-ai` package whose provider registers it programmatically. A profile's plugin composition determines which providers, and thus which skills, it exposes.

## Concrete Example

Ship a skill inside a package like `@deepseek-ai/dsh-skill-badge` and add its composition row to a profile; every session under that profile then sees `dsh-badge` in its catalog.

## Analogy

Mailing a recipe card to another kitchen so it appears in their binder.

## Related Concepts

- [[skill-profile|Skill per Profile]]
- [[skill-package|Skill Package]]
- [[skill-registry|Skill Registry]]
- [[skill-composition|Skill Composition]]
