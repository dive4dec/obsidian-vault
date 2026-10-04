---
tags: [DSH-Configuration]
domain: Configuration
---

# Theme

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-theme` lets Web GUI users choose `light`, `dark`, or `system` and set conversation content text from 12 to 17 px in Settings. A loopback client stores both values in the `ui-theme` settings namespace, which the local provider persists in `$DSH_HOME/cordis.patch.yml` by default. The plugin resolves `system` through `prefers-color-scheme` and publishes immutable `ThemeSnapshot`s, injecting a synchronous bootstrap so the palette applies before the shell loads.

## Concrete Example

Choose `dark` in Settings; the value persists to `$DSH_HOME/cordis.patch.yml` under `ui-theme` and applies on next load.

## Analogy

It is the appearance settings that persist to your home patch.

## Related Concepts

- [[locale-config|Locale]]
- [[settings-general|General Settings]]
- [[patch-file|Patch File]]
