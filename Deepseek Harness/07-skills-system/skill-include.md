---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Include

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`@cordisjs/plugin-include` is the file-backed loader that composes skill plugins from a YAML or JSON file. It reads a `cordis.yml`, turns each entry into a loader entry, and writes updates back when the file is writable. This is how a dsh profile declaratively lists which skill providers (`dsh-skill`, `dsh-skill-filesystem`, `dsh-tool-skill`, etc.) are mounted.

## Concrete Example

A `cordis.yml` line such as `- id: skillfs / name: '@deepseek-ai/dsh-skill-filesystem'` mounts the filesystem provider; `patches` can insert entries or override fields by matching `id`.

## Analogy

A shopping list that tells the kitchen exactly which ingredients to bring in.

## Related Concepts

- [[skill-composition|Skill Composition]]
- [[skill-loader|Skill Loader]]
- [[skill-group|Skill Group]]
- [[skill-profile|Skill per Profile]]
