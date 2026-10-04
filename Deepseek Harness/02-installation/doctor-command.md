---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Doctor Command

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The `dsh` launcher does not ship a dedicated `doctor` subcommand; install and runtime health are checked with `dsh --version` and the configuration dump flags instead. `--dump-default-config` and `--dump-config` let you inspect the composed tree without booting it. A developer cares because these are the real diagnostics the CLI provides.

## Concrete Example

Use `dsh --version` for the runtime and `--dump-config` / `--dump-default-config` to inspect the composed profile without booting it.

## Analogy

Like using the built-in gauges and inspection mirror instead of a separate diagnostic app.

## Related Concepts

- [[verify-install|Verify Install]]
- [[install-troubleshoot|Install Troubleshooting]]
- [[version-check|Version Check]]
