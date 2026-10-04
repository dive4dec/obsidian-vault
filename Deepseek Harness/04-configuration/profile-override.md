---
tags: [DSH-Configuration]
domain: Configuration
---

# Profile Override

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

A profile override is the per-profile layer of the composition: each profile's `cordis.patch.yml` overrides bundle defaults for that profile only. Reset in the settings UI restores the value beneath the profile override, including schema defaults, so a profile override sits between bundle values and home-level patches. A form write that a home patch or command-line overlay would override is refused.

## Concrete Example

Profile A's patch sets `mode: read-only` while profile B's patch sets `workspace-write`; each profile boots with its own value.

## Analogy

It is the per-app setting that shadows the shared default for just that profile.

## Related Concepts

- [[user-overrides|User Overrides]]
- [[global-settings|Global Settings]]
- [[config-precedence|Config Precedence]]
