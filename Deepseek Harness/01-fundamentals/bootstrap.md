---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Bootstrap

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Bootstrap is how dsh boots a profile: `src/bin.ts` loads only the selected runner, `src/args.ts` owns the command grammar, and the shared `dsh-app-boot` library loads environment layers, composes the profile's bundles and patches, boots every plugin, and returns the running app or identifies the failed plugin and cause. On first use, a shipped profile is initialized from its template. Developers care because boot failures name the offending plugin, and the effective configuration can be previewed before booting.

## Concrete Example

`--dump-config` previews the composed configuration without booting the profile.

## Analogy

It is a car's ignition sequence: check fluids, engage the right system, and only then start the engine.

## Related Concepts

- [[auto-initialize|Auto-Initialize]]
- [[launch-environment|Launch Environment]]
- [[version-compatibility|Version Compatibility]]
