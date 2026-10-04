---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Error

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

An agent error is what happens when a run fails or is cancelled. In `dsh-agent-loop`, terminal finishes enter `agent/request-error`; an unhandled failure ends the turn, and before closing a failed step the driver records an error result for each unanswered tool call so later requests keep paired history. Children are isolated, so a crashed child cannot corrupt the parent's session.

## Concrete Example

An unanswered tool call after a failed step gets `TOOL_OUTCOME_UNKNOWN` (or `TOOL_NOT_STARTED`), and a cancelled stream appends an `interrupted: true` anchor with the delivered prefix.

## Analogy

A post-mortem note left on the ticket explaining exactly where and why the task broke.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[agent-lifecycle|Agent Lifecycle]]
- [[agent-timeout|Agent Timeout]]
- [[agent-safety|Agent Safety]]
