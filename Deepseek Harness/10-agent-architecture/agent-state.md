---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent State

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent state is the mutable condition of a running agent: its persisted session, goal, active preset, and any durable facts it has recorded. Because state is persisted, an agent can be resumed, forked, or cold-resumed from a crashed turn and pick up where it left off.

## Concrete Example

`dsh-agent`'s resume path calls `persistence.open(id, 'write')` and appends interrupted-turn closers, so a log crashed mid-turn is repaired before the agent continues.

## Analogy

A save file: the worker's progress, open tasks, and where they were in the room.

## Related Concepts

- [[agent-context|Agent Context]]
- [[goal|Goal]]
- [[agent-lifecycle|Agent Lifecycle]]
- [[message-feedback|Message Feedback]]
