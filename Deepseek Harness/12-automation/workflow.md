---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Workflow

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-workflow is the orchestration capability for fanning work out to many subagents from a plain JavaScript script. Scripts call agent(), parallel(), and pipeline(), end with return <json-value>, and the model reaches them through the workflow tool. Each run belongs to its caller and returns one final outcome, never intermediate messages.

## Concrete Example

ctx.workflowEngine.start({ script, meta, args?, parent, signal? }) validates and runs the script; a failed child resolves to null so the script decides, while hook misuse kills the run loudly.

## Analogy

A conductor's score: the script writes the orchestration, the subagents are the players, and you hear only the final performance.

## Related Concepts

- [[workflow-ptc|Workflow PTC]]
- [[ptc|PTC]]
- [[batch|Batch]]
- [[concurrency|Concurrency]]
