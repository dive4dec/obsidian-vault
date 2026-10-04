---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Context

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill context is the runtime context a skill runs in — the `ctx` service object that carries the skill registry, tools, agents, and other services. `dsh-skill` registers under `ctx.skills`, `dsh-tool-skill` requires `ctx.agents`, `ctx.tools`, and `ctx.skills`, and `dsh-skill-filesystem` requires `ctx.skills`. A skill only sees the services its composition has mounted.

## Concrete Example

`dsh-tool-skill`'s plugin entry checks for `ctx.skills` (the registry) before exposing the `skill` loader tool to the model.

## Analogy

The workspace a chef is assigned, including which stations and tools are in reach.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-tool|Skill Tool]]
- [[skill-sandbox|Skill Sandbox]]
- [[skill-availability|Skill Availability]]
