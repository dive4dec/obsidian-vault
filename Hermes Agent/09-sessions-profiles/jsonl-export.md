---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# JSONL Export

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

A session export format. JSON Lines: one JSON object per line. Each line is a message.

## Concrete Example

session.jsonl: {role: user, content: Hello}. {role: assistant, content: Hi there}. {role: tool, content: ls -la output}. One message per line.

## Analogy

A list with one item per line - each line is complete on its own. JSONL export puts one message per line.

## Related Concepts

- [[session-export|Session Export]]
- [[sessions|Sessions]]
- [[hermes-sessions|Hermes Sessions]]
