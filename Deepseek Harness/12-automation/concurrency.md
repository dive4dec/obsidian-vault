---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Concurrency

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Concurrency bounds how much parallel work the runtime admits. dsh-jobs-local caps running plus stopping jobs per exact owner (maxConcurrentJobsPerOwner, default 10) with a separate bucket for unowned jobs, and terminal history does not occupy capacity. Workflow engines cap concurrent children and items per run.

## Concrete Example

Starting an eleventh live job in dsh-jobs-local fails before the producer runs, with an error that names the limit and says to kill a job or wait for one to finish.

## Analogy

How many lanes the highway has: more cars only help until the lanes run out.

## Related Concepts

- [[jobs-local|Local Jobs]]
- [[job|Job]]
- [[batch|Batch]]
- [[workflow|Workflow]]
