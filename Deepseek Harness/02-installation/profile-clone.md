---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Clone a Profile

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Cloning a profile means copying an existing profile as a starting point, so you keep its bundles and manifest and then diverge. Because a profile is just a directory under `$DSH_HOME/profiles/<name>` (a `package.json` manifest plus `cordis.patch.yml`), copying the directory plus reinstalling its deps gives you a clone. A developer cares because it is the fastest way to reuse a known-working setup.

## Concrete Example

Copy a profile directory under `$DSH_HOME/profiles/<name>` to a new name, then install its out-of-tree deps with `dsh plugin`.

## Analogy

Like duplicating a recipe you like before tweaking it for a new dish.

## Related Concepts

- [[fresh-profile|Fresh Profile]]
- [[install-profile|Installing a Profile]]
- [[backup-config|Back Up Config]]
