---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Profile

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A profile is an ordered stack of plugin-bundle patch layers under the user's own overrides, stored in `$DSH_HOME/profiles/<name>`. A profile directory holds a `package.json` (out-of-tree plugin dependencies plus the profile manifest `dsh.profile` with its ordered `bundles` list) and a `cordis.patch.yml` (the user's own patch layer). Developers care because the profile is the unit they customize, version, and boot.

## Concrete Example

`dsh --profile headless "run the tests"` boots the headless profile from `$DSH_HOME/profiles/headless`.

## Analogy

It is a saved, named scene in a game: equipment, settings, and a personal mod layer all packed together.

## Related Concepts

- [[profiles|Profiles]]
- [[profile-stack|Profile Stack]]
- [[cordis-patch|cordis.patch.yml]]
