---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Profile Stack

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A profile is composed over an empty root in a fixed order: each bundle's patch in `dsh.profile.bundles` order, then the profile's `cordis.patch.yml`, then the home-level `$DSH_HOME/cordis.patch.yml`, then `--patch` overlays. A patch entry replaces the target's whole configuration, so the last write wins per row. Developers care because this precedence is why a user patch beats a bundle default, and why an override must restate every setting it wants to keep.

## Concrete Example

Use `--dump-config` to inspect the composed tree without booting it.

## Analogy

It is a pile of sticky notes, read top to bottom, where the top note erases whatever the notes below it said.

## Related Concepts

- [[patch-layer|Patch Layer]]
- [[profile-manifest|Profile Manifest]]
- [[cordis-patch|cordis.patch.yml]]
