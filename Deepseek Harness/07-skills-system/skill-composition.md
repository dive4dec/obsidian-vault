---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Composition

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill composition is how skill plugins are combined into a profile's running stack. `@cordisjs/plugin-include` reads a `cordis.yml` into loader entries, `@cordisjs/plugin-group` nests related entries, and `@cordisjs/plugin-loader` imports and applies them. The resulting composition decides which providers — and thus which skills — a session exposes.

## Concrete Example

A profile's `cordis.yml` lists `dsh-skill`, `dsh-skill-filesystem`, and `dsh-tool-skill` as entries; `plugin-include` turns them into the loader entries that mount the skill stack.

## Analogy

Assembling the full mise en place from several prep stations before service.

## Related Concepts

- [[skill-include|Skill Include]]
- [[skill-group|Skill Group]]
- [[skill-loader|Skill Loader]]
- [[skill-profile|Skill per Profile]]
