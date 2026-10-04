---
tags: [DSH-Development]
domain: Development & Internals
---

# Author a Plugin

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Authoring a plugin package means creating `package.json` plus a `cordis.patch.yml` whose entries the Loader mounts in bundle order. `DshBundleManifest.patch` accepts one patch path or an ordered list that the launcher applies in order as one bundle layer, and `LocalizedText`/`PluginLocalizedMeta` supply display title, description, and icon.

## Concrete Example

Declare `dsh.bundle.patch: './cordis.patch.yml'` in `package.json`, then install the local path into a profile with `dsh plugin --profile web add ./my-plugin` — the plugin manager appends the bundle to `dsh.profile.bundles`.

## Analogy

You are writing a config cartridge: the package.json is the label, the patch file is the content.

## Related Concepts

- [[plugin-development|Plugin Development]]
- [[package-manifest|Package Manifest]]
- [[bundle|Bundling]]
