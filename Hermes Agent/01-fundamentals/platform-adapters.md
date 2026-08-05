---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Platform Adapters

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

Each messaging platform has an adapter, a piece of code that translates between that platform format and Hermes. This is why the same agent can talk on Telegram, Discord, and Email.

## Concrete Example

The Telegram adapter receives a text message and turns it into a Hermes request. The Discord adapter does the same but handles Discord slash commands.

## Analogy

Like translators at a meeting. Each one speaks a different language but passes the same message to the boss.

## Related Concepts

- [[gateway|Gateway]]
- [[multi-platform-agent|Multi-Platform Agent]]
