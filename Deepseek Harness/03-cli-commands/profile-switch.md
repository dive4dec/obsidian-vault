---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Switch Profile

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

One dsh install serves every profile under `$DSH_HOME/profiles/`, so switching is just naming a different profile on the command line. Shipped profiles (`web`, `headless`, `sdk`, `sdk-minimal`, `acp`) auto-initialize on first use; custom ones can be created with `--from-default-profile`.

## Concrete Example

`dsh web` for the GUI today, `dsh --profile headless "..."` in a script tonight — same launcher, different profiles.

## Analogy

Changing the dial on one radio rather than buying a new one per station.

## Related Concepts

- [[profile-flag|--profile Flag]]
- [[profile-list|List Profiles]]
- [[from-default-flag|--from-default-profile]]
