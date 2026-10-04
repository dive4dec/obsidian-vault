---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job Output

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Job output lands in a bounded per-job ring where stdout and stderr chunks reach the model and log chunks reach observers only. Stream jobs hand back only the output since the previous read; final-output jobs return their result once, on the first read after settlement.

## Concrete Example

job_output(job_id) renders stdout first and stderr in one [stderr] section, notes output that left memory before the read, and carries a subagent's answer exactly once; retainBytes (262144) is the live ring cap in dsh-jobs-local.

## Analogy

A cup that only ever holds the newest tea: the old pour is gone, and you see exactly what is in it now.

## Related Concepts

- [[jobs-tool|Jobs Tool]]
- [[job|Job]]
- [[job-log|Job Log]]
- [[job-status|Job Status]]
