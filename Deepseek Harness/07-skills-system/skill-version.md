---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Version

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Versioning a skill is how changes to its instructions are tracked over time. In dsh, `dsh-skill-filesystem` deliberately keeps the catalog and the body on separate lifecycles: discovery parses frontmatter, and every load re-reads the current file, so editing a skill body needs no versioning or cache invalidation. Versioned evolution is therefore a deployment concern rather than a registry one.

## Concrete Example

Because each load re-reads the file, updating `deploy/SKILL.md` takes effect on the next load without any cache-bust or version bump in `dsh-skill`.

## Analogy

A recipe card you can rewrite in place without re-filing it.

## Related Concepts

- [[skill-migration|Skill Migration]]
- [[skill-maintenance|Skill Maintenance]]
- [[skill-load|Load a Skill]]
- [[skill-cache|Skill Cache]]
