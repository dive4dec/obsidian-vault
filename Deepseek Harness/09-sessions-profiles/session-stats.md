---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Stats

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-stats` gives clients whole-session turn and step counts plus LLM, tool, first-token, and decode wall times through the public `sessionStats` projection value. The figures come from the complete durable log, so paging and compaction never change them. Use it when a client must show consistent conversation statistics across reloads and reduced history.

## Concrete Example

Mount `@deepseek-ai/dsh-session-stats` beside the session store and projection registry; it registers the `sessionStats` projection unit, which clients read instead of counting the loaded window.

## Analogy

A scoreboard that reads the official record book, not just what is on screen.

## Related Concepts

- [[session-projection|Session Projection]]
- [[turn-outline|Turn Outline]]
- [[session|Session]]
