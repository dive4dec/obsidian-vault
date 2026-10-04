---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job Controller

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-api-job-controller mirrors the job registry to the browser: job.list streams the roster one session can see, job.follow streams one job's retained output, and job.kill stops a job on a human's behalf. These reads never touch the model's consuming cursor or its completion notices.

## Concrete Example

The Web session-header job list renders the watchRows roster, and its stop control calls job.kill, which cancels with the reason cancelled by the user and answers outcome requested or already-finished.

## Analogy

A glass wall on the office floor: you can watch the work and stop it, without reaching into the worker's hands.

## Related Concepts

- [[job|Job]]
- [[jobs-local|Local Jobs]]
- [[job-status|Job Status]]
- [[job-cancel|Cancel a Job]]
