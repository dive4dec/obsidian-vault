---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Auto-Initialize

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The `web`, `headless`, `sdk`, `sdk-minimal`, and `acp` profiles auto-initialize on first use from shipped templates, so the first `dsh web` or `dsh --profile headless` creates the profile under `$DSH_HOME/profiles/` for you. A base-backed custom profile is instead initialized through `--from-default-profile` or `dsh plugin`. Developers care because it means a shipped profile works out of the box, while custom profiles need an explicit origin.

## Concrete Example

The first `dsh web` run materializes `$DSH_HOME/profiles/web` from the shipped web template.

## Analogy

It is the factory provisioning step: the machine ships blank but configures itself on first power-on.

## Related Concepts

- [[profiles|Profiles]]
- [[from-default-profile|From Default Profile]]
- [[bootstrap|Bootstrap]]
