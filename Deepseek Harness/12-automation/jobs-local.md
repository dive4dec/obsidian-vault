---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Local Jobs

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-jobs-local is the shipped in-process job registry: jobs run inside the harness process and die with it. It is the practical default when work does not need to survive a restart.

## Concrete Example

Loading the plugin registers ctx.jobs with maxConcurrentJobsPerOwner (default 10) and retainBytes (default 262144) bounding how many jobs run and how much output is kept per job.

## Analogy

A shared office workbench: fast and local, but everything on it disappears when you leave.

## Related Concepts

- [[job|Job]]
- [[concurrency|Concurrency]]
- [[state|Job State]]
- [[background-job|Background Job]]
