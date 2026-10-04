---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Metrics

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Measuring context growth and usage over time. `dsh-token-meter` provides the replay-based `tokenUsage`, `contextPressure`, and `contextBreakdown` that compaction planning and telemetry share, and `dsh-session-projection` can surface conversation statistics as a projection for occupancy displays.

## Concrete Example

`dsh-token-meter` replays the durable session log to report `contextPressure`, and a `dsh-session-projection` unit can expose conversation statistics for a live occupancy UI.

## Analogy

A dashboard of gauges showing how full the context tank is and how fast it's filling.

## Related Concepts

- [[token-meter|Token Meter]]
- [[context-cache|Context Cache]]
- [[context-debug|Debug Context]]
- [[context-budget|Context Budget]]
