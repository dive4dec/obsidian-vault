---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Desktop Rejection

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The `desktop` name is reserved for the Electron-owned profile, so the CLI rejects boot, config-dump, and plugin-management requests for it. Trying to boot it from the terminal is a category error — that profile belongs to the desktop host.

## Concrete Example

`dsh --profile desktop` is refused; only the desktop host owns that profile's lifecycle.

## Analogy

A hotel key that opens a suite only the front desk may use.

## Related Concepts

- [[plugin-command|dsh plugin]]
- [[config-dump|Config Dump]]
- [[profile-flag|--profile Flag]]
