---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Permission

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A skill's invocation policy is its permission surface: `dsh-skill` attaches a policy to every skill deciding which surfaces may advertise and load it. `modelInvocable: true` puts it in model-facing tools and catalogs, and `userInvocable: true` puts it in human-facing commands. The frontmatter keys `disable-model-invocation` and `user-invocable` in `dsh-skill-filesystem` drive this.

## Concrete Example

Setting `disable-model-invocation: true` keeps a skill out of model-facing catalogs so its only entry point is a user typing `/name` in `dsh-client-ui-skill`.

## Analogy

A door sign saying which side of the room you may walk in from.

## Related Concepts

- [[skill-sandbox|Skill Sandbox]]
- [[skill-security|Skill Security]]
- [[skill-metadata|Skill Metadata]]
- [[skill-trigger|Skill Trigger]]
