---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Launcher Flags

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Launcher flags are the ones `dsh` itself parses before delegating: `--profile <name>`, `--from-default-profile <template>`, `--dump-config`, `--dump-default-config`, `--dump-config-schema`, `--help`, and `--version`. Once the launcher hits a token it does not recognize, its parsing stops and the rest belongs to the app.

## Concrete Example

In `dsh --profile acp --dump-config`, both flags are consumed by the launcher and nothing is left for the app.

## Analogy

The building's main switchboard — it only understands its own buttons.

## Related Concepts

- [[command-grammar|Command Grammar]]
- [[app-flags|App Flags]]
- [[flag-parsing|Flag Parsing]]
