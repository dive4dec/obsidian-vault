---
tags: [DSH-Development]
domain: Development & Internals
---

# The Codebase

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

The dsh codebase is the `@deepseek-ai/*` package family: the launcher (`dsh`), boot packages (`dsh-app-boot`, `dsh-hmr`, `dsh-plugin-manager`), host services (`dsh-host-plugin-inventory`, `dsh-otel`), the Typert pipeline, client UI packages (`dsh-client-ui-*`), and experimental bundles. Production runs require built package and frontend artifacts; source execution runs the TypeScript entry directly.

## Concrete Example

In a stage checkout, `node_modules/@deepseek-ai/dsh/README.md` documents entry modes, `packages/boot/app-boot` owns profile parsing and patch precedence, and `packages/experimental/auto-review` is installable via `pnpm dsh plugin --profile web add ./packages/experimental/auto-review`.

## Analogy

It is a city of small specialized buildings that all share one map and one street address format.

## Related Concepts

- [[monorepo|Monorepo]]
- [[source-reading|Reading the Source]]
- [[doc|Documentation]]
