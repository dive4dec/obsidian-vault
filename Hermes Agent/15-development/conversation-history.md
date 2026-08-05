---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Conversation History

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The full message history of a session. Stored in state.db. Used for context, compression, and session resume.

## Concrete Example

Conversation: [user: Build a web app, assistant: Here is the plan..., user: Use React, assistant: Updated plan...]. All messages stored. On resume, the full history is loaded.

## Analogy

A meeting minutes book - every meeting is recorded. You can look back at any meeting. Conversation history is the minutes book for Hermes sessions.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[sessions|Sessions]]
- [[message-role-alternation|Message Role Alternation]]
