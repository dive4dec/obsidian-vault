---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh --version

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --version` prints the runtime version that installation and profile startup use to enforce declared DSH peer ranges. An incompatible plugin needs an explicitly acknowledged exact-version exemption to match that number.

## Concrete Example

Run `dsh --version` after installing, and compare the printed number against a plugin's declared peer range when you hit a peer mismatch.

## Analogy

The VIN plate on an engine — parts are checked against it before they are allowed to fit.

## Related Concepts

- [[exit-codes|Exit Codes]]
- [[launcher-flags|Launcher Flags]]
- [[flag-reference|Flag Reference]]
