---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# args.ts

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`src/args.ts` owns the command grammar — which flags the launcher claims, what a positional means, and where app arguments begin. When the CLI behaves in a way you cannot explain, this module is the source of truth.

## Concrete Example

The rule "the first unrecognized token starts the app's arguments" is implemented in `src/args.ts`, alongside the handling of `--profile` and `--from-default-profile`.

## Analogy

The building's wiring diagram: it decides which button powers which light.

## Related Concepts

- [[command-grammar|Command Grammar]]
- [[bin-entry|bin Entry]]
- [[flag-parsing|Flag Parsing]]
