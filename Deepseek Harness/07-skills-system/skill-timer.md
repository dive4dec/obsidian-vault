---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Timer

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`@cordisjs/plugin-timer` is a disposal-aware timer service for Cordis plugins, providing `ctx.timeout`, `ctx.interval`, `ctx.throttle`, and `ctx.debounce`. Timer handles are registered on the current fiber, so they are cleared automatically when the plugin that created them is disposed. A skill or provider that schedules work uses these rather than raw `setTimeout`.

## Concrete Example

`ctx.timeout(() => reloadCatalog(), 1000)` returns a disposer; when the owning skill plugin is disposed, the pending timer is cleared automatically.

## Analogy

A kitchen timer that silently stops itself when the chef leaves the room.

## Related Concepts

- [[skill-loader|Skill Loader]]
- [[skill-cache|Skill Cache]]
- [[skill-registry|Skill Registry]]
- [[skill-composition|Skill Composition]]
