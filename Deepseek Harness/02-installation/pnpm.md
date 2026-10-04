---
tags: [DSH-Installation]
domain: Installation & Setup
---

# pnpm

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

dsh uses pnpm for all profile plugin management. The `dsh plugin` command forwards directly to pnpm in the profile directory, so adding, removing, or updating an out-of-tree plugin is really a pnpm operation in `$DSH_HOME/profiles/<name>`. A developer cares because profile dependencies are resolved with pnpm semantics.

## Concrete Example

`dsh plugin --profile <name> add @deepseek-ai/some-plugin` forwards to pnpm in the profile directory.

## Analogy

Like a package manager the launcher quietly delegates to in the background.

## Related Concepts

- [[npm-registry|npm Registry]]
- [[install-profile|Installing a Profile]]
- [[update-dsh|Updating dsh]]
