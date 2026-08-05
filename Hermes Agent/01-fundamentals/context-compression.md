---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Context Compression

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

Conversations can get long and exceed the model memory limit. Hermes automatically compresses older context, keeping the important points and dropping the rest, so the chat can continue.

## Concrete Example

After a 200-message conversation, Hermes summarises the first 150 messages into a short paragraph and keeps the recent 50 messages in full.

## Analogy

Like skimming the first chapters of a book so you can focus on the current chapter, without forgetting the plot.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[config-sections|Config Sections]]
