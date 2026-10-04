---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Invalid Command

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

When you pass a command the launcher does not know, it does not silently do nothing — it exits nonzero. The launcher routes known entry points and flags, so unknown ones surface as failures you can detect.

## Concrete Example

`dsh definitely-not-a-profile` exits nonzero instead of launching anything.

## Analogy

Dialing a number that is not in the directory: the line goes dead, it does not ring.

## Related Concepts

- [[exit-codes|Exit Codes]]
- [[cli-errors|CLI Errors]]
- [[command-dispatch|Command Dispatch]]
