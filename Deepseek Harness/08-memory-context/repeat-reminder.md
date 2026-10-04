---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Repeat Tool Reminder

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-repeat-tool-reminder` is an advisory loop-hygiene guard that nudges the model out of identical tool-call loops. By discouraging redundant, repeated context — the same call logged again and again — it keeps the conversation from wasting the window on duplicate work.

## Concrete Example

When the agent is about to issue the same tool call it just made, `dsh-repeat-tool-reminder` appends a brief nudge advising against repeating the identical call.

## Analogy

A gentle "you already tried that" tap on the shoulder when you're about to do the same thing twice.

## Related Concepts

- [[tool-message|Tool Message]]
- [[salience|Salience]]
- [[dedup|Context Dedup]]
