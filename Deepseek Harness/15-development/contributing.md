---
tags: [DSH-Development]
domain: Development & Internals
---

# Contributing

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Contributing to dsh means adding or changing an `@deepseek-ai/*` package in the pnpm monorepo, keeping its manifest, README, and tests in step, and respecting the peer-range contract with the launcher. Every package follows the same README shape — Summary, Use this package, Understand the implementation, Model Experience, Known Limitations — so maintainers have a uniform review surface.

## Concrete Example

Adding an experimental feature means shipping it under a `dsh-experimental-*` name with no stability promise, named in `OPTIONAL_BUNDLES` so it ships off, and letting users opt in through the plugin manager.

## Analogy

It is contributing to a city where every building must match the shared architectural code.

## Related Concepts

- [[monorepo|Monorepo]]
- [[testing|Testing]]
- [[doc|Documentation]]
