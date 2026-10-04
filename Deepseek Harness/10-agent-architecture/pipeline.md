---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Pipeline

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

`pipeline` runs each item through a series of stages independently, with no barrier between stages — so one item's slow stage never holds up another item. Each stage receives `(prev, item, index)`, and a stage that throws drops just that item to `null` and skips its remaining stages.

## Concrete Example

`pipeline(items, ...stages)` in a `dsh-workflow` script streams every item through the stages, settling each on its own.

## Analogy

An assembly line where each product moves forward as soon as its station is done.

## Related Concepts

- [[parallel|Parallel]]
- [[workflow|Workflow]]
- [[agent-lifecycle|Agent Lifecycle]]
