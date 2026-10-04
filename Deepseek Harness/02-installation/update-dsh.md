---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Updating dsh

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Updating dsh means bringing the runtime and the profile plugin dependencies up to date. The dsh runtime is updated like any npm package, while each profile's plugins are updated through the pnpm-backed plugin manager. A developer cares because peer ranges are re-checked at boot, so an update can surface incompatibilities that need exemptions.

## Concrete Example

Update the `@deepseek-ai/dsh` package, then refresh a profile's plugins with `dsh plugin --profile <name> update` (pnpm in the profile directory).

## Analogy

Like patching both the operating system and the apps on top of it.

## Related Concepts

- [[backup-config|Back Up Config]]
- [[version-check|Version Check]]
- [[install-compatibility|Compatibility Check]]
