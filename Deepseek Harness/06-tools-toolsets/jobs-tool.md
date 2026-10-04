---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Jobs Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-jobs lets the agent inspect and control background work through job_output, job_list, and job_kill. Stream jobs return only the output since the previous read and every response ends with [status: ...]; a job's result arrives exactly once, on the first read after settlement. When owned work finishes, the agent gets an in-session notice — busy agents at their next step, idle agents woken by a follow-up turn.

## Concrete Example

job_output job_id=... wait=true blocks up to the configured cap; job_kill settles the job as killed only once its work actually stops.

## Analogy

A control panel with a read button, a list, and a stop button for background work.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[background-tool|Background Tool]]
- [[long-running-tool|Long-Running Tool]]
- [[workflow-tool|Workflow Tool]]
