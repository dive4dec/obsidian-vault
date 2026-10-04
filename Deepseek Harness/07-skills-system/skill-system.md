---
tags: [DSH-Skills]
domain: Skills System
---

# Skill System

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

The dsh skill system is the pipeline that discovers, resolves, and loads reusable instructions from multiple sources through one interface. `dsh-skill` is the registry that merges every provider's catalog, resolves duplicate names predictably, and loads a skill's body on demand. It deliberately carries no skill content itself — content comes from providers like `dsh-skill-filesystem`, and model access comes from `dsh-tool-skill`.

## Concrete Example

Mounting `@deepseek-ai/dsh-skill` alongside `@deepseek-ai/dsh-skill-filesystem` and `@deepseek-ai/dsh-tool-skill` gives a session one merged catalog and a `skill` loader tool.

## Analogy

A library front desk that catalogs books from every shelf and hands over the requested one.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-discovery|Skill Discovery]]
- [[skill-loader|Skill Loader]]
- [[skill-load|Load a Skill]]
