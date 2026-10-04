---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Metadata

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill metadata is the frontmatter that describes a skill without its body. `dsh-skill-filesystem` requires `name` and `description`, and supports optional `whenToUse`, `metadata`, `disable-model-invocation`, and `user-invocable`. These fields become the catalog entry and drive the invocation policy, while the instruction body stays separate and is loaded on demand.

## Concrete Example

A `SKILL.md` frontmatter block with `name: office-docx`, `description: ...`, and `whenToUse: when authoring Word files` is parsed into a catalog entry by `dsh-skill-filesystem`.

## Analogy

The title, ingredients, and tags on a recipe card before you read the steps.

## Related Concepts

- [[skill-trigger|Skill Trigger]]
- [[skill-permission|Skill Permission]]
- [[skill-authoring|Skill Authoring]]
- [[skill-catalog|Skill Catalog]]
