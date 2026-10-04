---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Subcommands

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh` is mostly a flat launcher — you name a profile and the launcher boots it — with `plugin` as its main built-in command group that takes its own subarguments. Everything else is a profile name, not a nested subcommand.

## Concrete Example

`dsh plugin --profile web add <package>` is the subcommand form, while `dsh web` is just a profile being booted.

## Analogy

A one-floor building where "web" and "acp" are room names rather than departments.

## Related Concepts

- [[command-dispatch|Command Dispatch]]
- [[plugin-command|dsh plugin]]
- [[command-grammar|Command Grammar]]
