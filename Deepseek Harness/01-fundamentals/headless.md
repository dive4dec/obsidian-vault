---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Headless

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh --profile headless "job"` runs one fresh persisted session, prints the final answer, and exits — no GUI, no server, no browser, no open ports. It suits scripts and CI: the task is the positional argument or stdin, `--json` emits a newline-delimited event stream on stdout, and `--session-id <id>` resumes a persisted conversation. Exit code 0 means the task completed; 1 means it aborted or errored.

## Concrete Example

`{ echo "Summarize these changes:"; git diff --stat; } | dsh --profile headless` pipes a task in from stdin.

## Analogy

It is a vending machine: one input, one output, the machine returns to idle.

## Related Concepts

- [[entry-modes|Entry Modes]]
- [[session|Session]]
- [[sdk|SDK]]
