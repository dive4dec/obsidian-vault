---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# The dsh CLI

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh` is the sole supported Node application launcher, not a set of per-profile binaries. Entry modes like `sdk`, `acp`, and `headless` are just profiles the launcher boots, and the launcher parses only its own flags — everything after the first unrecognized token belongs to the booted app. `src/args.ts` owns the command grammar, and `src/bin.ts` loads only the selected runner.

## Concrete Example

`dsh web` boots the Web profile, while `dsh --profile headless "run the tests"` runs a one-shot headless job. Both go through the same launcher.

## Analogy

Like one front desk that routes your call to the right department — web, headless, or SDK.

## Related Concepts

- [[command-grammar|Command Grammar]]
- [[launcher-flags|Launcher Flags]]
- [[app-flags|App Flags]]
