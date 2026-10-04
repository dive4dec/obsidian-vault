---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Cancel a Job

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Cancellation asks a running job to stop; the job settles as killed only once its work actually stops, and the requested reason is recorded in the terminal detail. Cancellation is a control plane: a job that ignores it holds one capacity slot and can stall teardown, which is why the registry force-fails a throwing cancel.

## Concrete Example

job_kill(job_id, reason?) returns outcome cancellation-requested or already-finished; a human stop from the Web job controller cancels with the reason cancelled by the user.

## Analogy

Calling off a running errand: you ask, the worker stops when they can, and the ticket is stamped killed.

## Related Concepts

- [[job|Job]]
- [[job-status|Job Status]]
- [[jobs-tool|Jobs Tool]]
- [[job-controller|Job Controller]]
