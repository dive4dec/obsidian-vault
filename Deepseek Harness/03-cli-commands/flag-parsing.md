---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Flag Parsing

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The launcher parses only its own flags, and the first token it does not recognize starts the app's arguments — everything from that token onward is passed through unchanged. This rule is what makes `dsh web --help` show the web app's flags and `dsh --help` show the launcher's.

## Concrete Example

In `dsh --profile tui --resume <id>`, the launcher keeps `--profile tui` and forwards `--resume <id>` to the terminal app.

## Analogy

A relay runner who hands off the baton at the first sign they do not understand.

## Related Concepts

- [[command-grammar|Command Grammar]]
- [[launcher-flags|Launcher Flags]]
- [[app-flags|App Flags]]
