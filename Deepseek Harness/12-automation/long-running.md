---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Long-Running

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Long-running work is the reason the job system exists: it must stay alive while the agent's turn ends and later turns resume. The job registry bounds it with per-job output rings and pump polling (pumpPollMs, default 150 ms), and workflow runs have no overall elapsed deadline, only per-backend execution limits.

## Concrete Example

A test suite or a build started as a background job keeps streaming stdout into its ring; the model reads it later with job_output, and updateProgress can publish a live progress line into every projection.

## Analogy

A marathon, not a sprint: the system's job is to keep the runner supplied and counted, not to hurry them.

## Related Concepts

- [[job|Job]]
- [[background-job|Background Job]]
- [[workflow|Workflow]]
- [[job-output|Job Output]]
