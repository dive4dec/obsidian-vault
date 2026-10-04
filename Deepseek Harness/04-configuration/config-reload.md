---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Reload

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-hmr` — when enabled in YAML — watches the profile manifest and both the profile and home `cordis.patch.yml` files, then recomposes all layers through one serialized reload. Edits arriving during watcher registration use the same nonfatal reload reporting as later edits. Without HMR, configuration changes apply on restart. The credential store has its own reload with `watch: true` and a `debounceMs` (default `100`).

## Concrete Example

Edit the profile's `cordis.patch.yml` with HMR enabled and the profile recomposes live; with HMR off, restart to apply.

## Analogy

It is live-reload for your configuration: save the file, the composition rebuilds.

## Related Concepts

- [[patch-file|Patch File]]
- [[config-editor|Config Editor]]
