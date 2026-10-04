---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job Status

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A job's status is a fresh projection on every read: running and stopping are live, completed, killed, and failed are terminal. job_list reports each job's id, kind, and status in one line, and every response from the job tools ends with a [status: ...] marker.

## Concrete Example

job_list() prints <id> [<kind>] <status> — <label>, and job_output(job_id, wait: true) waits up to waitTimeoutMs, returning [status: running] with the job still alive on timeout.

## Analogy

A package tracker: you ask, it tells you the latest state, and the last line is always the state.

## Related Concepts

- [[jobs-tool|Jobs Tool]]
- [[job|Job]]
- [[job-output|Job Output]]
- [[job-cancel|Cancel a Job]]
