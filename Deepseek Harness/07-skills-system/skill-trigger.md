---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Trigger

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A trigger is when a skill applies to a task. In dsh skills, the optional `whenToUse` frontmatter field describes the situation in which the skill is relevant, and the catalog description (capped by `catalogDescriptionMaxLength` in `dsh-tool-skill`) is what the model reads to decide whether to load it. The model is told never to infer instructions from the summary alone.

## Concrete Example

A skill frontmatter such as `whenToUse: when authoring or checking Office documents` tells the agent when `office-docx` from `dsh-skill-office` is appropriate.

## Analogy

The "best used for..." line on a tool that tells you when to reach for it.

## Related Concepts

- [[skill-metadata|Skill Metadata]]
- [[skill-availability|Skill Availability]]
- [[skill-priority|Skill Priority]]
- [[skill-conflict|Skill Conflict]]
