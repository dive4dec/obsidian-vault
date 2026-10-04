---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Observability

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Observability is how you watch a running agent: the event vocabulary, trajectory ledger, and telemetry that expose its activity. `dsh-agent` defines the `agent/*` event vocabulary plugins, UI, and orchestrators observe or intercept, and OTel-based telemetry carries that activity outward for debugging and metrics.

## Concrete Example

`dsh-agent`'s `agent/*` events (start, chunk, end) plus the Trajectory view and OTel telemetry let you trace a run from a single point.

## Analogy

Cameras, logs, and dashboards all watching the same shift.

## Related Concepts

- [[trajectory|Trajectory]]
- [[agent-metrics|Agent Metrics]]
- [[agent|Agent]]
