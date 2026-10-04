---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Automation Command

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

For external automation clients, `dsh --profile acp` is the entry point: it serves ACP clients over stdio until disconnect. External tooling keeps a connection open and drives the agent, rather than firing one-shot jobs.

## Concrete Example

Start `dsh --profile acp` and connect an automation client over stdio; the process stays alive until the client disconnects.

## Analogy

A helpline that stays on the line with its caller instead of taking one message and hanging up.

## Related Concepts

- [[acp-command|dsh acp]]
- [[non-interactive|Non-Interactive]]
- [[stdin-input|Stdin Input]]
