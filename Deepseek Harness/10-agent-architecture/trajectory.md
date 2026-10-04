---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Trajectory

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The trajectory is the agent's path made visible: a turn-aware ledger of what happened, with an interactive timing overview. `dsh-client-ui-trajectory` groups User, Assistant, Tool, nested Subtool, and compaction records, marks turn and step boundaries, and opens a record inspector for token usage, duration, input, output, and attachment summaries.

## Concrete Example

The Trajectory tab in the Web client shows each turn and step; long histories open at the tail and load older pages on demand.

## Analogy

A flight recorder you can scrub through after the run.

## Related Concepts

- [[turn|Turn]]
- [[agent-metrics|Agent Metrics]]
- [[agent-observability|Agent Observability]]
- [[message-feedback|Message Feedback]]
