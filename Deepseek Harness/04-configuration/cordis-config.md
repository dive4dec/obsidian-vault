---
tags: [DSH-Configuration]
domain: Configuration
---

# Cordis Config

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Cordis (`cordis`, `cordis-plugin-loader`, `cordis-plugin-group`) is the config/patch layering system that composes a profile's plugin stack. Each bundle in `dsh.profile.bundles` contributes a patch in order, and plugins declare the config schemas the loader composes into the active Config that every plugin reads. `dsh-settings` itself is mounted as an ordinary entry in that composition.

## Concrete Example

A profile patch enables settings with `- id: settings` / `name: '@deepseek-ai/dsh-settings'`, and the loader settles every entry before forms appear.

## Analogy

Cordis is the compiler for your profile: it orders and merges every patch layer into one running composition.

## Related Concepts

- [[patch-file|Patch File]]
- [[config-file|Config File]]
- [[plugin-inventory|Plugin Inventory]]
