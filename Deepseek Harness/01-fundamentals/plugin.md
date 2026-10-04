---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Plugin

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A plugin is a unit of dsh capability loaded by a profile, addressed by id inside the composed Cordis tree. Plugin rows declare a `name` (the npm package), an optional `config`, `inject` services, and a `disabled` flag; the last matching row's configuration wins per id. Developers care because every model, tool, and UI panel is a plugin row that a bundle or patch adds, overrides, or disables.

## Concrete Example

```yaml
- id: hmr
  disabled: false
  config:
    root: ["."]
```

## Analogy

It is a module in a service worker's registry: one named entry that registers its services into the running app.

## Related Concepts

- [[plugin-bundle|Plugin Bundle]]
- [[plugin-manager|Plugin Manager]]
- [[profile-stack|Profile Stack]]
