---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Retry

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Retry is how a failed or interrupted piece of automated work gets another chance. A job kill or failure settles the record; the model reads it with job_output and can start the work again. dsh-headless simply exits 1 and the outer script re-invokes the process; the webhook runtime is fire-and-forget with no built-in retry.

## Concrete Example

After a background job settles as failed, job_list shows its status and a fresh start (or a second dsh --profile headless run) is the retry; schedule retries only when a later task-management change, another wake, or a Host restart re-evaluates the pending task.

## Analogy

Rolling the dice again after a miss: the same bet, placed from scratch.

## Related Concepts

- [[job|Job]]
- [[headless|Headless]]
- [[job-status|Job Status]]
- [[idempotent|Idempotent Jobs]]
