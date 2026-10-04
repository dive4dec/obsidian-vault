---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Run a Job

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh --profile headless "<job>"` is the one-shot automation form: one fresh persisted session, the final answer printed, then exit. The job text becomes the session's prompt, and the exit code tells the script whether it succeeded.

## Concrete Example

`dsh --profile headless "generate release notes from the last commits"` prints the notes and exits.

## Analogy

Dropping a request in a drop box and receiving one stamped reply.

## Related Concepts

- [[headless-command|dsh headless]]
- [[one-shot|One-Shot]]
- [[batch-mode|Batch Mode]]
- [[ci-usage|CI Usage]]
