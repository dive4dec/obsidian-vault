---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Metrics

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent metrics measure how a run actually went: token usage, duration, and per-record detail. The trajectory record inspector surfaces these numbers per step so you can see where time and tokens went, and message feedback adds the human quality signal on top.

## Concrete Example

The Trajectory tab's record inspector shows token usage, duration, input, and output for each turn and step of an agent run.

## Analogy

A timesheet plus a fuel gauge for the worker's shift.

## Related Concepts

- [[trajectory|Trajectory]]
- [[message-feedback|Message Feedback]]
- [[agent-observability|Agent Observability]]
