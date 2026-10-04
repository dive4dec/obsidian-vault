---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Ralph Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-ralph runs a foreground sequence of fresh child agents against one immutable objective, each round receiving only the previous bounded report and shared workspace state; parent conversation and prior child sessions are never copied in. It returns when a worker reports completion or a concrete blocker, or when the configured round limit is reached — those reports are not independently verified. Use it only when the human explicitly requests Ralph-style fresh-agent iteration.

## Concrete Example

ralph objective="..." rounds=10 starts fresh agents per round; for ordinary long-running work use goal tools instead.

## Analogy

A relay race where each runner starts fresh with only a note from the last.

## Related Concepts

- [[goal-tool|Goal Tool]]
- [[subagent-tool|Subagent Tool]]
- [[long-running-tool|Long-Running Tool]]
