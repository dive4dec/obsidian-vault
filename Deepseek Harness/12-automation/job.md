---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A job is a unit of background work the agent keeps active while its own turn continues. dsh-jobs defines the contract: stable <kind>-N ids, owner-fenced access, a bounded output ring, and an event stream that announces settlement.

## Concrete Example

Loading dsh-jobs-local plus dsh-tool-jobs gives the agent job_output, job_list, and job_kill tools; jobs get ids like bash-1 and settle as completed, killed, or failed.

## Analogy

An errand you hand to someone else: you get a ticket number and they tell you when it is done.

## Related Concepts

- [[jobs-local|Local Jobs]]
- [[jobs-tool|Jobs Tool]]
- [[job-controller|Job Controller]]
- [[background-job|Background Job]]
