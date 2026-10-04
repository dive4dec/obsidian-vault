---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Entry Modes

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Entry modes are the ways dsh starts: `dsh web` boots the Web profile, `dsh --profile headless "job"` runs one fresh persisted session and exits, `dsh --profile sdk` serves SDK clients over JSON-RPC stdio, `dsh --profile sdk-minimal` serves them with the standalone minimal agent tree, and `dsh --profile acp` serves automation clients over ACP stdio until disconnect. Invalid commands, options from another mode, and fatal configuration or boot failures exit nonzero. Developers care because each mode is a different surface with a different footprint.

## Concrete Example

`dsh --profile headless "run the tests"` — one task, final answer printed, exit code 0 on success.

## Analogy

It is the set of doors into a building: lobby (web), drive-through (headless), freight dock (sdk), and service entrance (acp).

## Related Concepts

- [[headless|Headless]]
- [[sdk|SDK]]
- [[acp|ACP]]
