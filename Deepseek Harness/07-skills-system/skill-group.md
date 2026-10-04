---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Group

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`@cordisjs/plugin-group` nests related skill plugins under one loader group so they can be enabled or disabled together. A group entry's `config` is itself a child entry list, and nested ids use `:` separators (e.g. `tools:logger`). Disabling a group prevents its child entries from running, even though the group is always considered enabled itself.

## Concrete Example

A group entry `id: skills` with a child list containing `dsh-skill`, `dsh-skill-filesystem`, and `dsh-tool-skill` turns the whole skill stack on or off with one switch.

## Analogy

A drawer in a cabinet — opening or locking the drawer affects everything inside it.

## Related Concepts

- [[skill-include|Skill Include]]
- [[skill-composition|Skill Composition]]
- [[skill-loader|Skill Loader]]
- [[skill-enable|Enable a Skill]]
