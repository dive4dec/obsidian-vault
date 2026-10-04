---
tags: [DSH-Development]
domain: Development & Internals
---

# Development

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Developing with or for dsh means working with the pnpm monorepo of `@deepseek-ai/*` packages and the profile/bundle composition model. Production runs require built package and frontend artifacts, while source execution runs the TypeScript entry directly through `pnpm dsh <args...>`. Every package is independently versioned against DSH peer ranges, so development work has to respect the launcher's version contract.

## Concrete Example

From the repository root, run `pnpm run build` for production runs, or `pnpm dsh <args...>` to run the TypeScript entry and forward every argument in a source checkout like `/opt/conda/lib/dsh-stage`.

## Analogy

It is a monorepo of cooperating packages where the launcher is the single front door to everything you build.

## Related Concepts

- [[codebase|The Codebase]]
- [[monorepo|Monorepo]]
- [[build|Building]]
- [[plugin-development|Plugin Development]]
