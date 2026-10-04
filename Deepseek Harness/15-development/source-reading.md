---
tags: [DSH-Development]
domain: Development & Internals
---

# Reading the Source

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Navigating the dsh source starts from the launcher: `src/args.ts` owns the command grammar, `src/bin.ts` loads only the selected runner, and each package's README links its source map (e.g. `src/index.ts`, `src/service.ts`) and further-exploration pages to the subsystem references. Package READMEs document that most publish no runtime invariant companion because they read authoritative state directly.

## Concrete Example

To trace a plugin toggle, read `@deepseek-ai/dsh-plugin-manager/README.md` (operations.ts shares package operations with `dsh plugin`), then the [App boot] layer-precedence reference, then the Web `ui-plugin-manager` page that renders the service.

## Analogy

It is following the wiring diagram from the fuse box to the light you want to fix.

## Related Concepts

- [[codebase|The Codebase]]
- [[internals|Internals]]
- [[doc|Documentation]]
