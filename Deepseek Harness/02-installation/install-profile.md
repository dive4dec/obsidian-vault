---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Installing a Profile

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Installing a profile means either booting a shipped one (web, headless, sdk, sdk-minimal, acp), which auto-initializes on first use, or creating a custom one with `--from-default-profile`. The profile lives under `$DSH_HOME/profiles/<name>` as a `package.json` manifest plus a `cordis.patch.yml`. A developer cares because this is how you get a runnable configuration on disk.

## Concrete Example

`dsh --profile myprof --from-default-profile web` creates a custom profile from the web template, then boots it.

## Analogy

Like setting up a new workspace from a starter kit.

## Related Concepts

- [[init-profile|Initialize a Profile]]
- [[fresh-profile|Fresh Profile]]
- [[profile-clone|Clone a Profile]]
