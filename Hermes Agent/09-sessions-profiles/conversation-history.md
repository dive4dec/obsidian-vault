---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Conversation History

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

The full message history of a session. Stored in state.db. Used for context, compression, and resume.

## Concrete Example

Conversation: [user: Hello, assistant: Hi, user: Help, assistant: Sure...]. All messages stored. On resume, full history is loaded.

## Analogy

Meeting minutes - every word is recorded. Conversation history records every message in a session.

## Related Concepts

- [[sessions|Sessions]]
- [[state-db|State DB]]
- [[agent-loop|Agent Loop]]
