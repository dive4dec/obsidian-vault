---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The window of messages the model sees on a given turn. In dsh it is assembled from the system prompt, injected instructions, and the stored message history, then measured by `dsh-token-meter` before each model call. Keeping it within the model's limit is the job of the compaction and spill subsystems.

## Concrete Example

`ctx.tokenMeter` replays the durable session log and reports `contextPressure` and `contextBreakdown` for the current request, so compaction planning, occupancy displays, and telemetry all read the same replay-based measurement.

## Analogy

The agent's working set on a desk at any moment — only what fits on the desk is in play; everything else is in a filing cabinet.

## Related Concepts

- [[context-window|Context Window]]
- [[prompt-assembly|Prompt Assembly]]
- [[token-meter|Token Meter]]
- [[compaction|Compaction]]
