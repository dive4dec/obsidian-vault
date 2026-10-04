---
tags: [DSH-Skills]
domain: Skills System
---

# Custom Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A custom skill is one you author yourself rather than using a bundled provider. In dsh you write it as a directory bundle `<name>/SKILL.md` or a flat `<name>.md` under a scanned root, and `dsh-skill-filesystem` discovers it, parses its frontmatter, and serves it. `Config.customSkillDirs` lets a deployment point at its own skill directory at rank 300.

## Concrete Example

Drop a `deploy/SKILL.md` with `name` and `description` frontmatter into `<dshHome>/skills` and the filesystem provider's watcher adds it to the next session catalog.

## Analogy

Writing your own recipe card and adding it to the family binder.

## Related Concepts

- [[skill-filesystem|Skill Filesystem]]
- [[skill-authoring|Skill Authoring]]
- [[skill-metadata|Skill Metadata]]
- [[skill-templates|Skill Templates]]
