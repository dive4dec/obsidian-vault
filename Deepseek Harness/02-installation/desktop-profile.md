---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Desktop Profile

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

`desktop` is a reserved profile name owned by the Electron desktop app, not the CLI. The `dsh` command refuses to boot, config-dump, or manage plugins for the `desktop` profile. A developer cares because typing `dsh desktop` (or `--profile desktop`) is rejected by design, so you must not rely on it for CLI work.

## Concrete Example

The CLI rejects boot, config-dump, and plugin-management requests for the reserved `desktop` profile name.

## Analogy

Like a seat held in reserve that you are not allowed to sit in.

## Related Concepts

- [[install-modes|Install Modes]]
- [[install-profile|Installing a Profile]]
