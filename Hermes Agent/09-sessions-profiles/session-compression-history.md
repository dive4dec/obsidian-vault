---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Session Compression History

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

When a session is compressed, the old messages are replaced by a summary. The summary is part of the conversation history.

## Concrete Example

Session: 200 messages (100K tokens). Compression: summarizes first 150 messages into 5K tokens. Now: summary + 50 recent messages = 30K tokens. More room.

## Analogy

A meeting summary - instead of 2 hours of transcript, you have a 1-page summary. Compression history replaces old messages with summaries.

## Related Concepts

- [[sessions|Sessions]]
- [[context-compression|Context Compression]]
- [[conversation-history|Conversation History]]
