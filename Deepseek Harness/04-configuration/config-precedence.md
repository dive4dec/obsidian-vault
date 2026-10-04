---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Precedence

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

The composed tree resolves in a fixed order: each bundle's patch in `dsh.profile.bundles` order, then the profile's `cordis.patch.yml`, then the home-level `$DSH_HOME/cordis.patch.yml`, then `--patch` overlays. For credentials the layering is launch environment, stored file, project `.env`, then home `.env`, with the first value present winning. The same boundary shows in the UI: a form write that a higher layer would override is refused, and reset restores the value beneath the profile override.

## Concrete Example

A value set in the home `cordis.patch.yml` beats the profile's, which beats any bundle default — so the home patch is the last word.

## Analogy

It is a stack where later layers cover earlier ones, like CSS specificity.

## Related Concepts

- [[user-overrides|User Overrides]]
- [[config-file|Config File]]
- [[credentials-local|Local Credentials]]
