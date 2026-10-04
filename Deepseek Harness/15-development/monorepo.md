---
tags: [DSH-Development]
domain: Development & Internals
---

# Monorepo

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh is developed in a pnpm monorepo of independently versioned `@deepseek-ai/*` packages, from boot and host packages to client UI and experimental bundles. Profile plugin management forwards to pnpm in the profile directory, and the plugin manager's configuration (`pnpmCommand`, registry fallbacks) mirrors the monorepo's own tooling.

## Concrete Example

From the repository root, `pnpm run build` builds the packages and `pnpm dsh <args...>` runs the TypeScript entry; `OPTIONAL_BUNDLES` in `packages/boot/app-boot/src/profile.ts` names optional experimental packages that every installation ships switched off.

## Analogy

It is a company of small teams in one building, each with its own office but a shared elevator.

## Related Concepts

- [[codebase|The Codebase]]
- [[build|Building]]
- [[release|Releasing]]
