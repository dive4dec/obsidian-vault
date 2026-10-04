---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# App Flags

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

App flags belong to the booted profile's app plugin, not to the launcher. The launcher's parsing stops at the first unrecognized token, so flags like `--port` or `--resume` reach the app's own parser. The app receives them through the shared immutable cmdline snapshot maintained by the `dsh-cmdline` package.

## Concrete Example

`dsh web --port 8080` — `--port 8080` is an app flag only the web profile knows about.

## Analogy

The restaurant's own specials: the front desk never hears them, but the kitchen does.

## Related Concepts

- [[launcher-flags|Launcher Flags]]
- [[flag-parsing|Flag Parsing]]
- [[app-help|App Help]]
