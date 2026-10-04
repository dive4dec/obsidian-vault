---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# JSON Output

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Machine-readable output comes from the stdio profiles: `dsh --profile sdk` speaks JSON-RPC over stdio, so an SDK client gets structured, parseable messages instead of free text. Headless, by contrast, prints the final answer as text for humans and simple scripts.

## Concrete Example

Point your SDK client at `dsh --profile sdk` and consume JSON-RPC messages on stdout.

## Analogy

A machine that prints barcodes for scanners instead of handwriting notes for people.

## Related Concepts

- [[sdk-command|dsh sdk]]
- [[sdk-minimal-command|dsh sdk-minimal]]
- [[scripting|Scripting dsh]]
