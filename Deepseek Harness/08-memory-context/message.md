---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Message

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

A single user, assistant, system, or tool message — the atomic unit of the session log. Messages are appended to history, measured by `dsh-token-meter`, and, for images, marked by `dsh-compaction-image-offload` using a sequence number and depth-first image index. `dsh-system-prompt` messages carry the model-facing framing for the turn.

## Concrete Example

An image-offload decision identifies the selected occurrences by current message-event sequence and depth-first image index; a condensed span becomes one summary message carrying a stable marker so any consumer can recognize it.

## Analogy

One line in a chat transcript — a single turn of speech from one participant.

## Related Concepts

- [[tool-message|Tool Message]]
- [[history|Message History]]
- [[role|Message Role]]
- [[summary|Summary]]
