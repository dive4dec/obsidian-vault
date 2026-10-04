---
tags: [DSH-Configuration]
domain: Configuration
---

# Global Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Global settings are the layers that apply across profiles: the home-level `$DSH_HOME/cordis.patch.yml`, the `$DSH_HOME/.env` fallback, and shared stores like `$DSH_HOME/.credentials.yaml`. The `permission` settings namespace holds `defaultPreset` for future sessions, and the theme and locale settings persist in `$DSH_HOME/cordis.patch.yml` by default. Session creation reads these shared values, but later changes never alter an existing session.

## Concrete Example

Set the default permission preset once in the `permission` settings namespace and every fresh session inherits it.

## Analogy

It is the system-wide defaults every profile inherits unless it overrides them.

## Related Concepts

- [[profile-override|Profile Override]]
- [[dsh-home-env|$DSH_HOME]]
- [[permission-presets|Permission Presets]]
