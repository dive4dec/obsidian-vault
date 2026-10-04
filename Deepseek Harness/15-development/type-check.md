---
tags: [DSH-Development]
domain: Development & Internals
---

# Type Check

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

TypeScript type checking is where the dsh type libraries earn their keep: `@deepseek-ai/dsh-package-manifest` supplies `DshPackageManifest` and friends as pure declarations, and `@deepseek-ai/dsh-typert-protocol` keeps strict reflection in the compiler with versioned descriptors on service prototypes. The Typert build pipeline turns checked declarations into runtime `InvocationDescriptor`s.

## Concrete Example

`import type { DshPackageManifest } from '@deepseek-ai/dsh-package-manifest'` type-checks a plugin's manifest literal; `remoteMethods(service)` in the Typert protocol validates the descriptor's version and returns a detached snapshot of the `@Remote`-marked methods.

## Analogy

It is the spell-checker that catches the wrong connector before anything gets wired up.

## Related Concepts

- [[typert-protocol|Typert Protocol]]
- [[package-manifest|Package Manifest]]
- [[build|Building]]
