---
tags: [DSH-Skills]
domain: Skills System
---

# Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A skill is a reusable, task-specific instruction a dsh agent loads on demand instead of hardcoding behavior. In dsh the skill is described by YAML frontmatter (`name`, `description`, optional `whenToUse`) plus a Markdown body, and an invocation policy decides which surfaces (model tool vs. user `/name`) may load it. Keeping procedures as loadable units keeps the system prompt lean while letting the agent pull exactly the steps it needs.

## Concrete Example

In `dsh-skill-filesystem` a skill is a directory bundle `<name>/SKILL.md` or a flat `<name>.md` under a scanned root; the model loads its full body via the `skill` tool from `dsh-tool-skill`.

## Analogy

A recipe card the agent pulls out only when it needs to cook that dish, rather than memorizing every recipe.

## Related Concepts

- [[skill-system|Skill System]]
- [[skill-filesystem|Skill Filesystem]]
- [[skill-load|Load a Skill]]
- [[skill-metadata|Skill Metadata]]
