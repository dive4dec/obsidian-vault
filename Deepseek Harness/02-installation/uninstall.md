---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Uninstall

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Uninstalling dsh removes the launcher package and, optionally, `$DSH_HOME`. Removing the package takes the `dsh` command off your PATH; removing `$DSH_HOME` deletes all profiles, settings, and credentials. A developer cares because deciding whether to keep `$DSH_HOME` preserves your configuration and credentials across reinstalls.

## Concrete Example

Remove the `@deepseek-ai/dsh` package, then optionally delete `$DSH_HOME` (`~/.dsh`) to discard profiles and credentials.

## Analogy

Like pulling a plug and deciding whether to keep the furniture.

## Related Concepts

- [[backup-config|Back Up Config]]
- [[restore-config|Restore Config]]
- [[portable-install|Portable Install]]
