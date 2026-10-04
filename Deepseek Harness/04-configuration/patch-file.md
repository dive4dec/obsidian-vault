---
tags: [DSH-Configuration]
domain: Configuration
---

# Patch File

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

A `cordis.patch.yml` file patches the composed plugin stack. Every profile has one, the harness home has a second at `$DSH_HOME/cordis.patch.yml`, and `dsh-hmr` — when enabled in YAML — watches the profile manifest and both patch files, then recomposes all layers through one serialized reload. Command-line `--patch` overlays stack on top of everything.

## Concrete Example

Editing the profile's `cordis.patch.yml` recomposes the profile live under HMR; without HMR the change applies on restart.

## Analogy

A patch file is a diff you keep: it records only the layers you changed, on top of the bundles beneath.

## Related Concepts

- [[user-overrides|User Overrides]]
- [[cordis-config|Cordis Config]]
- [[config-reload|Config Reload]]
- [[theme-config|Theme]]
