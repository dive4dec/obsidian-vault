---
tags: [DSH-Configuration]
domain: Configuration
---

# User Overrides

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

A profile is an ordered stack of plugin-bundle patch layers under the user's own overrides: the profile's `cordis.patch.yml`, then the home-level `$DSH_HOME/cordis.patch.yml`, then `--patch` overlays. Because these layers compose after every bundle, your values win over bundle defaults. The settings UI treats the same boundary: reset restores the value beneath the profile override, and a form write that a home patch would override is refused.

## Concrete Example

Setting `mode: workspace-write` in the profile's `cordis.patch.yml` overrides the `read-only` deployment default for that profile.

## Analogy

Your override file is the top sheet of the stack — whatever it names wins for that profile.

## Related Concepts

- [[patch-file|Patch File]]
- [[config-precedence|Config Precedence]]
- [[config-file|Config File]]
- [[profile-override|Profile Override]]
