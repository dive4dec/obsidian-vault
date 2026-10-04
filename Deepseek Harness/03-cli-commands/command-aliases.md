---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Command Aliases

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The CLI's built-in shortcut is the positional form: `dsh <name>` is an alias for `dsh --profile <name>`, so `dsh web` and `dsh --profile web` are identical. Beyond the launcher, you can add your own aliases in the shell.

## Concrete Example

`dsh web` and `dsh --profile web` boot the same Web profile.

## Analogy

The elevator button that also works from inside the door.

## Related Concepts

- [[profile-positional|`dsh <name>`]]
- [[profile-flag|--profile Flag]]
- [[command-shortcuts|Shell Shortcuts]]
