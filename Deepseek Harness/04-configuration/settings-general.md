---
tags: [DSH-Configuration]
domain: Configuration
---

# General Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-general` gives the dsh web client its Settings panel, a connection-recovery control, feature-contributed navigation, and sequential first-run onboarding. Feature packages supply their own settings rows, sections, and onboarding steps; this package supplies the shared presentation and the Coding Tools switch without adding onboarding copy. Legacy sections from an old `settings.yaml` import into this general settings entry (`ui-settings-general`).

## Concrete Example

The Settings panel opens from the sidebar; a failed connection shows a retry control, and feature packages register their rows into the same panel.

## Analogy

It is the Settings shell — the chrome that every feature package fills in.

## Related Concepts

- [[settings|Settings]]
- [[theme-config|Theme]]
- [[settings-controller|Settings Controller]]
