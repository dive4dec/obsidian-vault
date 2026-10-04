---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Exit Codes

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Invalid commands, options from another mode, and fatal configuration or boot failures exit nonzero, so scripts can tell a failed dsh run from a successful one. The exit status is the contract that makes headless automation scriptable.

## Concrete Example

An unknown command like `dsh bogus-profile` exits nonzero, so `dsh ... && echo ok` in a CI script only prints `ok` on success.

## Analogy

A cash register that only beeps "sale complete" when the transaction truly succeeded.

## Related Concepts

- [[invalid-command|Invalid Command]]
- [[cli-errors|CLI Errors]]
- [[run-job|Run a Job]]
