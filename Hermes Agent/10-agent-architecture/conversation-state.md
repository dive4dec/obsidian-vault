---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Conversation State

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The conversation state tracks all messages, tool results, and metadata across turns so the agent knows what happened so far.

## Concrete Example

The state holds 12 messages: 3 from you, 5 from the assistant, and 4 tool results. The agent uses this history to stay on track.

## Analogy

Like a scoreboard recording every point so the referee knows the current score.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[message-role-alternation|message role alternation]]
- [[context-compression-trigger|context compression trigger]]
