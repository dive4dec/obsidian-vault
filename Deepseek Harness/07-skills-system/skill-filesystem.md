---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Filesystem

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`dsh-skill-filesystem` is the local filesystem provider that turns skill files on disk into catalog entries. It scans the project, custom, and user skill roots, parses each skill's YAML frontmatter, and watches the directories so new, renamed, or deleted skills reach agents without a restart. It requires the `ctx.skills` service provided by the `dsh-skill` registry.

## Concrete Example

Roots are scanned in rank order: `<projectRoot>/.dsh/skills` (100), `.agents/skills` (200), `Config.customSkillDirs` (300), `<dshHome>/skills` (400), and `<agentsHome>/skills` (500); a skill is `<name>/SKILL.md` or a flat `<name>.md`.

## Analogy

A file watcher that re-indexes a folder of documents whenever one is added or edited.

## Related Concepts

- [[skill-discovery|Skill Discovery]]
- [[skill-metadata|Skill Metadata]]
- [[skill-system|Skill System]]
- [[custom-skill|Custom Skill]]
