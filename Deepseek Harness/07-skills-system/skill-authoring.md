---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Authoring

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill authoring is writing a new skill for your vault or org. A skill starts as YAML frontmatter plus a Markdown body, and its shape is validated: `dsh-skill-filesystem` requires `name` and `description`, and `dsh-skill-office` rejects skill files without a YAML frontmatter description at activation. A rejected frontmatter spelling for an invocation key drops the whole skill with a warning.

## Concrete Example

Author a skill by creating `my-skill/SKILL.md` with `name`, `description`, and optional `whenToUse`, `metadata`, `disable-model-invocation`, and `user-invocable` frontmatter under a scanned root.

## Analogy

Composing a new recipe card with a clear title and ingredient list.

## Related Concepts

- [[custom-skill|Custom Skill]]
- [[skill-metadata|Skill Metadata]]
- [[skill-best-practices|Skill Best Practices]]
- [[skill-templates|Skill Templates]]
