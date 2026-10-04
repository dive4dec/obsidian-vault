---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Templates

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A skill template is a starting point for a new skill. The canonical shape is the `SKILL.md` frontmatter plus body that `dsh-skill-filesystem` expects: required `name` and `description`, optional `whenToUse`, `metadata`, `disable-model-invocation`, and `user-invocable`. Bundled providers like `dsh-skill-office` serve as reference templates for structured, multi-file skills.

## Concrete Example

Start from a `my-skill/SKILL.md` with `name` and `description` frontmatter and a short body, mirroring the format `dsh-skill-filesystem` discovers under a scanned root.

## Analogy

A blank recipe card with the title and ingredient lines already ruled in.

## Related Concepts

- [[skill-authoring|Skill Authoring]]
- [[custom-skill|Custom Skill]]
- [[skill-metadata|Skill Metadata]]
- [[skill-best-practices|Skill Best Practices]]
