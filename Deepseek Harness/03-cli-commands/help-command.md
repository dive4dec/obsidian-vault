---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh --help

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --help` prints the launcher's own help: profile selection, `--from-default-profile`, the config-dump flags, and the version. It is deliberately distinct from the booted app's flags, which only appear once you name the profile.

## Concrete Example

Run `dsh --help` for launcher flags, then `dsh web --help` for the web app's flags.

## Analogy

The building's lobby menu, versus the menu inside each office.

## Related Concepts

- [[app-help|App Help]]
- [[command-help|Command Help]]
- [[flag-reference|Flag Reference]]
