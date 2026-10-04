---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Shell Shortcuts

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Because every entry mode is the same `dsh` command with different arguments, wrapping common invocations in shell functions keeps your muscle memory short. A one-line function beats a long flag string on every run.

## Concrete Example

A shell function `djob() { dsh --profile headless "$@"; }` lets you run `djob "run the tests"` from CI or locally.

## Analogy

Sticky labels on the shortcuts keys of a keyboard.

## Related Concepts

- [[command-aliases|Command Aliases]]
- [[scripting|Scripting dsh]]
- [[run-job|Run a Job]]
