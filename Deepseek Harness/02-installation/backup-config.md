---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Back Up Config

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Backing up config means copying `$DSH_HOME`, which holds profiles, settings, and the credentials file, before an update that could change formats or peer ranges. A developer cares because `$DSH_HOME` is the single root of your user data and is not otherwise versioned for you.

## Concrete Example

Copy the whole `$DSH_HOME` directory (defaults to `~/.dsh`) before an update.

## Analogy

Like snapshotting the drive before a big OS upgrade.

## Related Concepts

- [[restore-config|Restore Config]]
- [[config-dir-locate|Locate Config Dir]]
- [[path-config|Path Configuration]]
