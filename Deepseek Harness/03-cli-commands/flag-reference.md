---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Flag Reference

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The launcher's flags are the small set it parses itself: `--profile`, `--from-default-profile`, `--dump-config`, `--dump-default-config`, `--dump-config-schema`, `--help`, and `--version`. App flags like `--port` and `--resume` are documented by their respective profiles, not the launcher.

## Concrete Example

`dsh --profile web --port 8080` mixes one launcher flag (`--profile`) with one app flag (`--port`).

## Analogy

A pocket card listing only the lobby switches, with each office's own sheet taped inside its door.

## Related Concepts

- [[launcher-flags|Launcher Flags]]
- [[app-flags|App Flags]]
- [[help-command|dsh --help]]
