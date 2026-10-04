---
tags: [DSH-Development]
domain: Development & Internals
---

# Plugin Development

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

A dsh plugin is a package loaded by the Cordis Loader inside a profile composition; writing one means shipping a `package.json` with a `dsh` manifest block and a patch file that contributes plugin entries. Install and startup enforce `engines.dsh` peer ranges against the runtime version from `dsh --version`, so your plugin declares the host versions it supports.

## Concrete Example

A minimal plugin manifest: `{ name: 'example-dsh-plugin', version: '1.0.0', engines: { node: '>=24', dsh: '0.1.5-alpha.1' }, dsh: { manifestVersion: 1, bundle: { patch: './cordis.patch.yml' } } }` per the `@deepseek-ai/dsh-package-manifest` types.

## Analogy

A plugin is a cartridge with a labeled compatibility range that the console checks before it boots.

## Related Concepts

- [[plugin-authoring|Author a Plugin]]
- [[package-manifest|Package Manifest]]
- [[peer-deps|Peer Dependencies]]
- [[extending|Extending dsh]]
