---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Stdin Input

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

For the stdio entry modes (`dsh --profile sdk`, `dsh --profile acp`), stdin/stdout is the protocol channel: SDK clients speak JSON-RPC over stdio, and ACP clients stay connected over ACP stdio until disconnect. The one-shot headless form keeps its job in the command line instead.

## Concrete Example

An SDK client pipes JSON-RPC requests into `dsh --profile sdk` and reads the responses on stdout.

## Analogy

A walkie-talkie channel rather than a drop box: both sides stay on the line.

## Related Concepts

- [[sdk-command|dsh sdk]]
- [[acp-command|dsh acp]]
- [[run-job|Run a Job]]
