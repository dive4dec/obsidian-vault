---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Examples

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill examples show how a skill is invoked. The two entry points are the model calling the `skill` tool with the exact skill name, and a user typing `/name` to invoke a user-invocable skill. `dsh-client-ui-skill` records the requested name and arguments on the tool row so an invocation can be replayed.

## Concrete Example

A model loads `office-xlsx` via the `skill` tool, while a user triggers the same skill by typing `/office-xlsx` in the composer.

## Analogy

A "try it like this" sample plate next to the recipe card.

## Related Concepts

- [[skill-params|Skill Parameters]]
- [[skill-tool|Skill Tool]]
- [[skill-ui|Skill UI]]
- [[skill-instructions|Skill Instructions]]
