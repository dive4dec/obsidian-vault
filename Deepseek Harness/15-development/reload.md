---
tags: [DSH-Development]
domain: Development & Internals
---

# Reload

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

A reload is dsh-hmr recomposing all profile layers — bundle patches in `dsh.profile.bundles` order, then the profile and home `cordis.patch.yml`, then `--patch` overlays — through one serialized transaction. `runExclusive()` serializes configuration changes and Loader updates and rejects nested transactions; file events received mid-transaction are processed afterward.

## Concrete Example

A manifest notification reloads only when the ordered `dsh.profile.bundles` list changes; profile and home patch changes always trigger recomposition, and HMR never acquires the profile write lock that package operations use.

## Analogy

It is a single-lane merge where every config change is applied atomically, in order, by one worker.

## Related Concepts

- [[hmr|HMR]]
- [[hmr-watch|HMR Watch]]
- [[hot-reload|Hot Reload]]
