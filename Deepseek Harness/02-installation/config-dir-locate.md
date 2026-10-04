---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Locate Config Dir

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Locating the config dir means finding where profiles and home data live on disk. Everything resolves from the one home root: the launcher resolves it before any plugin mounts, with an explicit override winning over `$DSH_HOME` over `~/.dsh`. Profiles live under `$DSH_HOME/profiles/<name>`. A developer cares because this is where you look to inspect or back up anything.

## Concrete Example

The home resolves as explicit override > `$DSH_HOME` > `~/.dsh`; profiles live under `$DSH_HOME/profiles/<name>`.

## Analogy

Like the single folder where all your settings and saved work are filed.

## Related Concepts

- [[path-config|Path Configuration]]
- [[backup-config|Back Up Config]]
- [[credentials-setup|Credentials Setup]]
