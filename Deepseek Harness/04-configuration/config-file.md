---
tags: [DSH-Configuration]
domain: Configuration
---

# Config File

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

A profile's configuration lives in its directory under `$DSH_HOME/profiles/<name>`: a `package.json` (out-of-tree plugin dependencies plus the `dsh.profile` manifest with its ordered `bundles` list) and a `cordis.patch.yml`, the user's own patch layer. The tree composes over an empty root: bundle patches in `dsh.profile.bundles` order, then the profile patch, then the home-level `$DSH_HOME/cordis.patch.yml`, then `--patch` overlays. Use `--dump-config` to inspect the composed tree without booting it.

## Concrete Example

`dsh --profile web --dump-config` prints the composed profile tree; edits to the profile's `cordis.patch.yml` are where you change values.

## Analogy

A profile folder is a `package.json` plus a stack of YAML patch layers, like a small monorepo of configuration.

## Related Concepts

- [[config-format|Config Format]]
- [[user-overrides|User Overrides]]
- [[patch-file|Patch File]]
- [[config-precedence|Config Precedence]]
