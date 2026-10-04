---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Debug Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Inspecting what is actually in the context and how much it costs. `dsh-token-meter` reports `contextPressure` and `contextBreakdown` for the current request, and `dsh-session-projection` serves current per-session state to clients, so you can see what the model is seeing and why compaction or spill fired.

## Concrete Example

Read `ctx.tokenMeter` for `contextBreakdown` to see how the window is split across system prompt, history, and tool results, and check the session log for the full pre-compaction content.

## Analogy

Opening the hood of a car to see which system is running hot before it breaks.

## Related Concepts

- [[token-meter|Token Meter]]
- [[context-metrics|Context Metrics]]
- [[context-projection|Context Projection]]
- [[context-limit|Context Limit]]
