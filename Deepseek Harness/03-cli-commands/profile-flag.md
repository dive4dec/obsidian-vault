---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# --profile Flag

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`--profile <name>` tells the launcher to boot the profile stored under `$DSH_HOME/profiles/<name>`. It is the explicit form of profile selection, useful when you also want to pass app arguments after it.

## Concrete Example

`dsh --profile headless "summarize the changelog"` boots the headless profile and runs the job.

## Analogy

Like picking a channel before tuning in — same radio, different station.

## Related Concepts

- [[profile-positional|`dsh <name>`]]
- [[from-default-flag|--from-default-profile]]
- [[default-profile|Default Profile]]
- [[profile-switch|Switch Profile]]
