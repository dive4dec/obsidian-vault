---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# CI

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Continuous integration is the classic home for dsh automation: each pipeline step is a one-shot headless run that exits 0 on success, and CI scripts can pipe context into stdin or parse the --json event stream. Because headless opens no ports and leaves nothing running, it fits pipelines that wait on the process.

## Concrete Example

dsh --profile headless "run the tests" as a pipeline step: exit code 0 passes the step, 1 fails it, and { git diff --stat | dsh --profile headless --json } gives the pipeline a machine-readable event stream.

## Analogy

The assembly-line station: work arrives, one job runs, a pass/fail lamp lights, and the line moves on.

## Related Concepts

- [[headless|Headless]]
- [[batch|Batch]]
- [[cd|CD]]
- [[pipeline-automation|Pipeline Automation]]
