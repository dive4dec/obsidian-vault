---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Profiles

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The profile system provides named, bootable configurations for dsh. The shipped profiles are `web`, `headless`, `sdk`, `sdk-minimal`, and `acp`, which auto-initialize on first use from shipped templates; the `desktop` name is reserved for the Electron-owned profile, so the CLI rejects boot, config-dump, and plugin-management requests for it. Developers care because choosing or creating a profile decides which model, tools, and safety defaults a run gets.

## Concrete Example

`dsh web` auto-initializes the Web profile on first use; a new custom profile is created at an unused, non-shipped name with `--from-default-profile`.

## Analogy

It is a set of prebuilt appliance models you can buy, or a custom one you order from a catalog sheet.

## Related Concepts

- [[profile|Profile]]
- [[auto-initialize|Auto-Initialize]]
- [[entry-modes|Entry Modes]]
