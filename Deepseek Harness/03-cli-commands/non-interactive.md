---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Non-Interactive

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The headless, sdk, sdk-minimal, and acp entry modes run without a person at the keyboard: no prompts, no GUI. This is what makes them usable from scripts and CI, and it pairs with an approval policy that cannot ask a human for consent.

## Concrete Example

`dsh --profile headless "run the tests"` completes or fails without ever waiting for a keypress.

## Analogy

An ATM: it never asks a teller for a second opinion.

## Related Concepts

- [[interactive-mode|Interactive Mode]]
- [[batch-mode|Batch Mode]]
- [[ci-usage|CI Usage]]
