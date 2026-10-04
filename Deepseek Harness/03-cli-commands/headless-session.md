---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Headless Session

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

A headless run creates one fresh persisted session, executes the job, prints the final answer, and exits. "Fresh" means no inherited conversation; "persisted" means the session is written, not thrown away.

## Concrete Example

Each `dsh --profile headless "..."` call is a brand-new session that gets persisted, then the process exits.

## Analogy

A taxi that takes one passenger to one stop, logs the fare, and goes back to the pool.

## Related Concepts

- [[one-shot|One-Shot]]
- [[run-job|Run a Job]]
- [[headless-command|dsh headless]]
