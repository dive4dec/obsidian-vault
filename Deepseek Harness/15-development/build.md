---
tags: [DSH-Development]
domain: Development & Internals
---

# Building

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Production dsh runs require built package and frontend artifacts, so `pnpm run build` from the repository root is a prerequisite for any production launch. Source execution is the alternative: `pnpm dsh <args...>` runs the TypeScript entry and forwards every argument, with the source-execution reference owning the module-resolution contract.

## Concrete Example

In a stage checkout, built artifacts under `node_modules/@deepseek-ai/*` are what `dsh web` loads; from the repo root, `pnpm run build` then `pnpm dsh web` runs the fresh TypeScript source.

## Analogy

It is the difference between driving the factory car and building the car first.

## Related Concepts

- [[monorepo|Monorepo]]
- [[release|Releasing]]
- [[type-check|Type Check]]
