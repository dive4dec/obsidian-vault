---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Command Help

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Per-command help comes in two layers: `dsh --help` documents the launcher itself, while `dsh <profile> --help` documents whatever app plugin that profile boots. Knowing which layer you are asking is half the answer when a flag seems missing.

## Concrete Example

`dsh --help` for launcher flags; `dsh web --help` for the web app's flags.

## Analogy

The building's directory, then each office's own sign-in sheet.

## Related Concepts

- [[help-command|dsh --help]]
- [[app-help|App Help]]
- [[flag-reference|Flag Reference]]
