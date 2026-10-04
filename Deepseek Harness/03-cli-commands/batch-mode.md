---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Batch Mode

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Headless runs are non-interactive by design, which makes them safe to drive in loops and scripts. Each invocation is a fresh persisted session that prints its final answer and exits, so a batch is just a series of such one-shot calls.

## Concrete Example

A shell loop that calls `dsh --profile headless "..."` once per input line, capturing each printed answer.

## Analogy

A photocopier you keep feeding sheets to — no one sits at the control panel.

## Related Concepts

- [[run-job|Run a Job]]
- [[scripting|Scripting dsh]]
- [[non-interactive|Non-Interactive]]
