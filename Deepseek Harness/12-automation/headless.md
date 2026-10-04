---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Headless

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-headless is the one-shot profile for scripts and CI: one task from an argument or stdin, the final answer on stdout, then the process exits. It opens no port and leaves nothing running, so pipelines can simply wait on the process.

## Concrete Example

dsh --profile headless "run the tests" prints the answer; --json adds a newline-delimited event stream, --session-id <id> resumes a persisted conversation, and exit code 1 signals a failed run.

## Analogy

A single-purpose appliance: power on, do one job, power off.

## Related Concepts

- [[automation|Automation]]
- [[unattended|Unattended]]
- [[ci|CI]]
- [[batch|Batch]]
