---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# CLI Errors

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Fatal configuration and boot failures exit nonzero and print a message you can act on — an invalid command, an option from another mode, or a profile that cannot compose. Reading the message tells you whether the problem is the launcher's parsing or the profile's boot.

## Concrete Example

An option from another mode, or an unknown command, exits nonzero — the first thing to check before debugging the agent itself.

## Analogy

The error slip a vending machine prints: it tells you which step failed, not just that it did.

## Related Concepts

- [[exit-codes|Exit Codes]]
- [[invalid-command|Invalid Command]]
- [[debug-mode|Debug Mode]]
