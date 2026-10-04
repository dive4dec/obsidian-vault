---
tags: [DSH-Development]
domain: Development & Internals
---

# Internals

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Under the hood, dsh composes a profile over an empty root: each bundle's patch in `dsh.profile.bundles` order, then the profile's `cordis.patch.yml`, then the home-level `$DSH_HOME/cordis.patch.yml`, then `--patch` overlays. Packages resolve from the dsh installation first (`@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, `@deepseek-ai/dsh-headless`, ...), then from the profile's own `node_modules`.

## Concrete Example

`src/bin.ts` loads only the selected runner and `src/args.ts` owns the command grammar; `--dump-config` prints the composed tree without booting it, and `--dump-config-schema` prints JSON Schema for the tree's declared plugin entries and patches.

## Analogy

It is a sandwich: layers in a fixed order, and anyone can inspect the stack without biting in.

## Related Concepts

- [[architecture|Architecture]]
- [[internals-debug|Debug Internals]]
- [[source-reading|Reading the Source]]
