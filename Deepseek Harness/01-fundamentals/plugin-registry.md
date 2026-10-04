---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Plugin Registry

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The plugin registry is where available plugins and bundles are discovered and registered for a profile. The plugin manager's `listBundles` reports each bundle's one-liner, the rows its patch declares, and the built-in rows it overrides, plus selection state and load errors. Developers care because the registry tells them what a profile can enable and which selected bundles failed to load.

## Concrete Example

`listBundles` marks a launcher-optional bundle as `optional` — shipped switched off, never removable, selected by no shipped template.

## Analogy

It is the app store's catalog page for a device: what is installed, what is available, and what is broken.

## Related Concepts

- [[plugin-manager|Plugin Manager]]
- [[plugin-bundle|Plugin Bundle]]
- [[plugin|Plugin]]
