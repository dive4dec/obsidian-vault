---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# List Profiles

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Profiles live under `$DSH_HOME/profiles/`, one directory per profile, each with its `package.json` (including the `dsh.profile` manifest) and `cordis.patch.yml`. Listing that directory shows exactly what you can boot.

## Concrete Example

`ls $DSH_HOME/profiles` lists every profile the launcher can boot from this install.

## Analogy

The channel list on the TV — the dials that exist are the folders that exist.

## Related Concepts

- [[profile-switch|Switch Profile]]
- [[default-profile|Default Profile]]
- [[profile-flag|--profile Flag]]
