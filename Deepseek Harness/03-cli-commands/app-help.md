---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# App Help

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh web --help` prints the web app's flags, not the launcher's — `--help` is the first token the launcher does not recognize, so it starts the app's arguments and is passed through. The same trick works for any booted profile.

## Concrete Example

`dsh web --help` lists the web app's own options, such as `--port`.

## Analogy

Pressing help after the operator has already transferred you — now the app's own manual shows.

## Related Concepts

- [[help-command|dsh --help]]
- [[app-flags|App Flags]]
- [[flag-parsing|Flag Parsing]]
