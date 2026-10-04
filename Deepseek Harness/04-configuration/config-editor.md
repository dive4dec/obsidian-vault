---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Editor

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-config-editor` saves plugin configuration in the active profile's patch and applies it immediately. Writes validate the complete candidate before touching disk and serialize with profile changes and HMR, so concurrent edits and reloads cannot interleave. Invalid values and higher-layer overrides leave the file unchanged, which is how the settings UI refuses a write a home patch would override.

## Concrete Example

Saving a value in the web Settings panel lands in the profile's `cordis.patch.yml` and is applied in the same serialized reload pass.

## Analogy

It is a transactional editor: validate the whole candidate first, commit to the patch file second.

## Related Concepts

- [[settings|Settings]]
- [[patch-file|Patch File]]
- [[user-overrides|User Overrides]]
