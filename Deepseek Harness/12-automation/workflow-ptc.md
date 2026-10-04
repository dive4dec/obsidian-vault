---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Workflow PTC

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-workflow-ptc is the current workflow engine: it runs orchestration scripts in fresh Node processes under the calling Session's file sandbox policy, with subagents performing the delegated work. The same execution provider also serves PTC tool programs and the opt-in Ralph loop.

## Concrete Example

Mounting @deepseek-ai/dsh-workflow-ptc next to dsh-tool-workflow gives the workflow tool its execution; runs have no overall elapsed deadline, and cancellation stops the managed process and disposes child agents.

## Analogy

A sandboxed rehearsal hall: each script gets a fresh stage and the same rules as a bash command.

## Related Concepts

- [[workflow|Workflow]]
- [[ptc|PTC]]
- [[workflow-run|Workflow Run]]
- [[long-running|Long-Running]]
