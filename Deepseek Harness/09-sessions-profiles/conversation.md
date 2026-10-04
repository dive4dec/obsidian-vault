---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Conversation

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

The conversation is the model-visible message thread a session projects from its event log. `dsh-session` derives it with `session.deriveMessages()`, projecting the log into the ordered `Message[]` the model sees each turn. Compaction can hide superseded entries from the active conversation without deleting them from the log.

## Concrete Example

`session.deriveMessages()` is cached and incremental; surface events like `user/message`, `assistant/message`, and `tool/result` are what appear in the conversation.

## Analogy

The visible chat window, as opposed to the full transcript behind it.

## Related Concepts

- [[history|History]]
- [[session|Session]]
- [[turn|Turn]]
