---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# --resume

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`--resume <id>` is an app flag, not a launcher flag — the launcher passes it through to the booted profile. The README shows it as an example of terminal-app flags: `dsh tui --resume <id>`, assuming that profile is installed.

## Concrete Example

`dsh --profile tui --resume <id>` resumes that session in the terminal app.

## Analogy

A "continue where we left off" button on the show, not on the TV remote.

## Related Concepts

- [[app-flags|App Flags]]
- [[flag-parsing|Flag Parsing]]
- [[interactive-mode|Interactive Mode]]
