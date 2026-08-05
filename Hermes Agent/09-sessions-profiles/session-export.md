---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Session Export

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

Export a session to a file. Command: hermes sessions export --id ID. Formats: JSONL, JSON.

## Concrete Example

hermes sessions export --id a1b2c3d4 --format jsonl. File: session-a1b2c3d4.jsonl. Contains all messages, tool calls, and metadata. Shareable.

## Analogy

Saving a chat log - you export the conversation to a file. Session export saves conversations for sharing or backup.

## Related Concepts

- [[hermes-sessions|Hermes Sessions]]
- [[session-id|Session ID]]
- [[sessions|Sessions]]
