---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# One-Shot

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Headless is the one-shot runner of the dsh entry modes: a single invocation, a single job, one final answer printed, then the process exits. There is no lingering session or open channel to clean up.

## Concrete Example

`dsh --profile headless "diff the last two commits"` prints the answer and the command line returns.

## Analogy

A single-shot camera — one picture, then it's done.

## Related Concepts

- [[headless-session|Headless Session]]
- [[run-job|Run a Job]]
- [[batch-mode|Batch Mode]]
