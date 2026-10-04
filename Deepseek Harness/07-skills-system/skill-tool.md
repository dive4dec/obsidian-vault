---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Tool

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`dsh-tool-skill` is the model-facing consumer that turns the merged skill catalog into something the agent can actually use. Before the first request, when model-invocable skills exist, it injects a durable catalog of names and capped descriptions, and exposes a `skill` loader tool that returns the full instruction body in a canonical `<skill_content>` block. It requires `ctx.agents`, `ctx.tools`, and `ctx.skills`.

## Concrete Example

The model calls the `skill` tool with the exact skill name and receives its full instructions; a user can instead invoke a user-invocable skill by typing `/name`, and `catalogDescriptionMaxLength` (default `500`) caps each catalog description.

## Analogy

A search box over a manual where a single click opens the full chapter.

## Related Concepts

- [[skill-system|Skill System]]
- [[skill-load|Load a Skill]]
- [[skill-list|List Skills]]
- [[skill-params|Skill Parameters]]
