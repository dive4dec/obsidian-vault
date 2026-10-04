---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Command Dispatch

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Command dispatch is how `dsh` routes the parsed command to the selected runner: the launcher decides which profile entry mode you asked for and loads only that runner. A dispatch failure — an unknown command or an option from another mode — is one of the conditions that exits nonzero.

## Concrete Example

`dsh --profile headless "job"` dispatches to the headless runner, not to the web or SDK runners.

## Analogy

A switchboard that connects your line to exactly the one office you asked for.

## Related Concepts

- [[bin-entry|bin Entry]]
- [[invalid-command|Invalid Command]]
- [[exit-codes|Exit Codes]]
