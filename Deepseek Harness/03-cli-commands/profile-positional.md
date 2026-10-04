---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# `dsh <name>`

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The launcher also accepts a profile name as a bare positional argument — the shorthand form of `--profile <name>`. `dsh web`, `dsh acp`, and `dsh headless` are all instances of this form; the positional name selects the profile to boot under `$DSH_HOME/profiles/<name>`.

## Concrete Example

`dsh web` is equivalent to `dsh --profile web`: it boots the Web profile, with the invoking directory as the workspace root.

## Analogy

The same as the explicit flag, just dropping the "please" — the name alone is enough.

## Related Concepts

- [[profile-flag|--profile Flag]]
- [[web-command|dsh web]]
- [[default-profile|Default Profile]]
