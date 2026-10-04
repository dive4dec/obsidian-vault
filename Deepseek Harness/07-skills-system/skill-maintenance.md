---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Maintenance

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill maintenance is keeping skills current. `dsh-skill-filesystem` watches its roots so renames, additions, and deletions reach the next catalog without a restart, and each load re-reads the current body so edits apply immediately. Because discovery and loading are on separate lifecycles, maintaining a skill body does not require cache invalidation.

## Concrete Example

Editing the body of `deploy/SKILL.md` takes effect on the next load, and deleting the file removes it from the catalog on the next discovery pass.

## Analogy

Rewriting and re-filing recipe cards as ingredients and seasons change.

## Related Concepts

- [[skill-version|Skill Version]]
- [[skill-migration|Skill Migration]]
- [[skill-best-practices|Skill Best Practices]]
- [[skill-filesystem|Skill Filesystem]]
