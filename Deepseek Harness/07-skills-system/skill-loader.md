---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Loader

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`@cordisjs/plugin-loader` is the runtime loader that imports skill plugin modules by name, applies their config, and keeps the running plugin graph in sync with entry updates. It owns an `EntryTree` and exposes `loader.create`, `loader.update`, and `loader.remove` to start, rest, and stop entries. The `dsh-tool-skill` package separately provides the model-facing `skill` load tool.

## Concrete Example

`root.loader.create({ name: './plugins/skillfs', config: { enabled: true } })` imports the module, applies config, and starts it; `loader.await()` waits for pending imports.

## Analogy

A forklift that fetches a box from the shelf, sets it on the counter, and hooks it up.

## Related Concepts

- [[skill-include|Skill Include]]
- [[skill-registry|Skill Registry]]
- [[skill-load|Load a Skill]]
- [[skill-timer|Skill Timer]]
