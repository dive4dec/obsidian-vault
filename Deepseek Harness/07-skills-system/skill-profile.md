---
tags: [DSH-Skills]
domain: Skills System
---

# Skill per Profile

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Each dsh profile exposes the skills its plugin composition mounts. Because the skill stack is assembled per profile, one profile can carry `dsh-skill-office` and another can keep it out, and a bundled provider like `dsh-skill-badge` is only present where its composition row is enabled. Project-level roots in `dsh-skill-filesystem` can also vary the catalog per workspace.

## Concrete Example

A profile whose `cordis.yml` enables `@deepseek-ai/dsh-skill-badge` sees `dsh-badge`; a profile that leaves it `disabled: true` does not.

## Analogy

Each kitchen has its own binder, so one kitchen's recipe cards aren't in another's.

## Related Concepts

- [[skill-availability|Skill Availability]]
- [[skill-composition|Skill Composition]]
- [[skill-enable|Enable a Skill]]
- [[skill-share|Share a Skill]]
