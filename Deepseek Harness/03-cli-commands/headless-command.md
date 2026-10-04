---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh headless

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --profile headless "job"` is the one-shot entry mode: it runs one fresh persisted session, prints the final answer, and exits. It is built for automation — no GUI, no lingering process, and clean stdout to capture.

## Concrete Example

`dsh --profile headless "run the tests"` performs the job, prints the result, and exits with a status code you can check in a script.

## Analogy

A vending machine: insert your job, receive one printed answer, done.

## Related Concepts

- [[run-job|Run a Job]]
- [[one-shot|One-Shot]]
- [[headless-session|Headless Session]]
- [[batch-mode|Batch Mode]]
