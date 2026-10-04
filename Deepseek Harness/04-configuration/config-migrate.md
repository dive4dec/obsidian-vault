---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Migrate

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

dsh migrates configuration shapes between versions in place, at boot. `dsh-credentials-local` recognizes the pre-release flat credential layout (a bare mapping of reference names with no `version`) and upgrades it under the writer lock, nesting the original lines under `refs:` so values, comments, and spellings survive byte for byte. The `dsh-settings` plugin does the same for a legacy `settings.yaml`, importing it once and renaming the file to `settings.yaml.imported`. Live reloads never migrate; an unversioned shape restored mid-run keeps serving the last good snapshot.

## Concrete Example

A flat `DEEPSEEK_API_KEY: sk-…` credentials file becomes `version: 1` with the same line under `refs:` after the next boot.

## Analogy

It is an in-place schema upgrade that runs at boot and never on a live reload.

## Related Concepts

- [[config-format|Config Format]]
- [[settings|Settings]]
- [[credentials-local|Local Credentials]]
