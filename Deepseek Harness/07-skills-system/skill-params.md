---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Parameters

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Parameters are the arguments a skill accepts and the knobs that change how it behaves. In dsh the model passes the exact skill name to the `skill` tool, and the Web client records the requested skill name and recorded arguments on the tool row so a settled call can be replayed. A skill's invocation policy (modelInvocable / userInvocable) also shapes how it can be called.

## Concrete Example

A `/name` token typed by a user carries the skill name as its argument; `dsh-client-ui-skill` shows the requested skill name on the collapsed tool row and expands it into an `Instructions` card.

## Analogy

The input fields on a form you fill in before running the procedure.

## Related Concepts

- [[skill-tool|Skill Tool]]
- [[skill-ui|Skill UI]]
- [[skill-output|Skill Output]]
- [[skill-metadata|Skill Metadata]]
