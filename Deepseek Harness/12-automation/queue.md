---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Queue

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Queueing is how jobs and continuations are ordered and admitted. The job registry does not queue at capacity: at maxConcurrentJobsPerOwner, start() fails before the producer runs and tells the agent to kill a job or wait. Schedule's writes share one FIFO, and the goal round driver admits one round per idle point.

## Concrete Example

When the dsh-jobs-local bucket is full, start() fails with an error naming the limit instead of enqueuing; the model then waits or kills an unneeded job and retries.

## Analogy

A turnstile with no line: if the room is full you are told, not queued.

## Related Concepts

- [[job|Job]]
- [[concurrency|Concurrency]]
- [[job-status|Job Status]]
- [[schedule|Schedule]]
