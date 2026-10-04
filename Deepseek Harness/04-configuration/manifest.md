---
tags: [DSH-Configuration]
domain: Configuration
---

# package-manifest

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-package-manifest` provides the types for package metadata: `DshPackageManifest` for full package metadata, `DshManifest` for the public fields under `dsh`, and member types such as `DshClientManifest` for one domain. Each reader owns JSON parsing, validation, and default resolution, so the manifest is a typed shape rather than a runtime parser.

## Concrete Example

A profile's `package.json` reads `dsh.profile` (the manifest with its `bundles` list) through the `DshManifest` type.

## Analogy

It is the typed schema for the `dsh` section of a `package.json`.

## Related Concepts

- [[config-file|Config File]]
- [[plugin-inventory|Plugin Inventory]]
