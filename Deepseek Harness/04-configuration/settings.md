---
tags: [DSH-Configuration]
domain: Configuration
---

# Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-settings` edits the fields plugins declare with `.volatile()` through Config-derived forms and shows their effective values. Each form identifies a plugin by its profile entry id, preserves secret values, and refuses stale writes; changes persist through the active profile's Cordis patch. A `settings.yaml` left in the harness home by earlier releases is imported once (`ui-developer-tools` → `ui-settings`, `ui-onboarding` → `ui-settings-general`, `shell` → the platform's shell executor entry) and renamed to `settings.yaml.imported`.

## Concrete Example

Resetting a field restores the value beneath the profile override, including schema defaults; a form write that a home patch or command-line overlay would override is refused.

## Analogy

The Settings panel is a generated form over the live plugin config — like an admin UI that only exposes fields each plugin opts into.

## Related Concepts

- [[settings-controller|Settings Controller]]
- [[config-editor|Config Editor]]
- [[global-settings|Global Settings]]
- [[user-overrides|User Overrides]]
