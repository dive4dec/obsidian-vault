---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Jobs Tool

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-tool-jobs is the model-facing half of the job system: it registers the job_output, job_list, and job_kill tools, attaches the controller that arms job producers, and delivers completion notices in-session. Without it an agent cannot even start background work.

## Concrete Example

job_output(job_id, wait?) reads output since the last read and ends with [status: ...]; an idle agent is woken with a follow-up turn when a job settles, and waitTimeoutMs defaults to 30,000 ms.

## Analogy

A phone line to your errands: call to check on them, and they call back when finished.

## Related Concepts

- [[job|Job]]
- [[job-status|Job Status]]
- [[job-output|Job Output]]
- [[job-cancel|Cancel a Job]]
