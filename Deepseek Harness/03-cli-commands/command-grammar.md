---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Command Grammar

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The command grammar splits `dsh <args>` into what the launcher keeps and what the booted profile receives. The launcher parses only its own flags such as `--profile`, and the first token it does not recognize starts the app's arguments. The grammar lives in `src/args.ts`, which is why `dsh web --port 8080` works even though the launcher has no concept of `--port`.

## Concrete Example

In `dsh --profile web --port 8080`, the launcher consumes `--profile web`, then hands `--port 8080` to the web app.

## Analogy

Like an operator who takes your first word and repeats the rest for you.

## Related Concepts

- [[flag-parsing|Flag Parsing]]
- [[launcher-flags|Launcher Flags]]
- [[app-flags|App Flags]]
