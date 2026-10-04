---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh acp

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --profile acp` serves automation clients over ACP stdio until disconnect. It is a profile rather than a separate bin, so external tooling connects to it over stdio.

## Concrete Example

Launch `dsh --profile acp` and attach an ACP client; the process stays up until the client disconnects.

## Analogy

A reception line that stays open for walk-ins and closes when they leave.

## Related Concepts

- [[automation-cmd|Automation Command]]
- [[sdk-command|dsh sdk]]
- [[non-interactive|Non-Interactive]]
