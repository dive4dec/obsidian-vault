---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Message Feedback

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Message feedback is the canonical way to rate finalized assistant messages. `dsh-message-feedback` records positive or negative ratings, an optional category from a fixed feedback taxonomy, and optional verbatim notes; the canonical session log owns every creation, edit, and deletion, and `list`, `put`, and `delete` expose feedback without constructing or waking an agent.

## Concrete Example

Rate a finalized assistant message with a positive/negative rating and a taxonomy category; the feedback is log-only and never enters model history.

## Analogy

A thumbs up or down under a reply, stored for quality review.

## Related Concepts

- [[trajectory|Trajectory]]
- [[agent-metrics|Agent Metrics]]
- [[agent-state|Agent State]]
