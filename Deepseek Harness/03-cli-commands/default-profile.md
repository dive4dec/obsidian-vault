---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Default Profile

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

When you do not name a profile, the launcher still needs a target; the default is the profile selected when none is named. Naming the profile explicitly — with `--profile` or a positional — always wins over the default.

## Concrete Example

`dsh web` names the profile explicitly; when a profile is omitted entirely, the default selection applies.

## Analogy

The radio remembering the last station, until you dial a new one.

## Related Concepts

- [[profile-flag|--profile Flag]]
- [[profile-positional|`dsh <name>`]]
- [[profile-switch|Switch Profile]]
