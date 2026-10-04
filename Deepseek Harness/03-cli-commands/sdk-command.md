---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh sdk

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --profile sdk` serves SDK clients over JSON-RPC stdio until shutdown or disconnect. The SDK is a profile, not a separate public bin, so an SDK client simply talks to the launcher over stdio.

## Concrete Example

Point your SDK client at `dsh --profile sdk` and it exchanges JSON-RPC messages over stdin/stdout.

## Analogy

A waiter who stays at your table taking orders on a dedicated line until you leave.

## Related Concepts

- [[sdk-minimal-command|dsh sdk-minimal]]
- [[acp-command|dsh acp]]
- [[non-interactive|Non-Interactive]]
