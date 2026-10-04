---
tags: [DSH-Development]
domain: Development & Internals
---

# Documentation

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

The package READMEs are dsh's primary documentation: each `@deepseek-ai/*` package ships an English and Chinese README with a uniform structure — Summary, Use this package, Understand the implementation, Further Exploration, Model Experience, Known Limitations and Deferred Work, and Dev Note. The generated configuration catalog is the exhaustive source for every accepted config field and its JSDoc.

## Concrete Example

`@deepseek-ai/dsh-hmr/README.md` documents its config table (`base`, `root`, `ignored`, `debounce`, `awaitWriteFinish`), and `@deepseek-ai/dsh-plugin-manager/README.md` owns the version-exemptions reference with `allow-version` and `revoke-version`.

## Analogy

It is the manual printed on the inside of every drawer of the same filing cabinet.

## Related Concepts

- [[codebase|The Codebase]]
- [[source-reading|Reading the Source]]
- [[contributing|Contributing]]
