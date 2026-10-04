---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# --from-default-profile

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`--from-default-profile <template>` creates a new custom profile from a shipped template, then boots it. Use an unused, non-shipped name: the shipped `web`, `headless`, `sdk`, `sdk-minimal`, and `acp` profiles auto-initialize on first use, while a custom profile is derived from a base-backed template this way.

## Concrete Example

`dsh --profile mytool --from-default-profile headless` creates the `mytool` profile from the headless template and boots it.

## Analogy

Cloning a factory-preset phone profile as the starting point of your own.

## Related Concepts

- [[profile-flag|--profile Flag]]
- [[profile-switch|Switch Profile]]
- [[profile-list|List Profiles]]
