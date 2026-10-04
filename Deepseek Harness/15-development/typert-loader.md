---
tags: [DSH-Development]
domain: Development & Internals
---

# Typert Loader

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-typert-loader` makes every mounted package that publishes generated Typert artifacts automatically contribute its host-face reflection and schema factories to the runtime registry, and withdraw them on unmount. Packages without the generated `./typert` export are skipped, so the plugin is safe to add to any composition; an explicit `packages` list covers plugins nested behind another Loader entry.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-typert-registry'
- name: '@deepseek-ai/dsh-typert-loader'
```
Resolution verdicts are cached for the process lifetime, so a package that gains a `./typert` export mid-process needs a restart.

## Analogy

It is a service-registry agent that signs each package in and out as it mounts and unmounts.

## Related Concepts

- [[typert|Typert]]
- [[typert-protocol|Typert Protocol]]
- [[internals|Internals]]
