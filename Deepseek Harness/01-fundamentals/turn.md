---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Turn

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A turn is one iteration of the agent loop: at a turn boundary the driver opens a durable turn, claims pending input, and runs one or more steps — each step assembles the prompt and tools, projects runtime context, calls the model, and executes any requested tool calls before the next step. A turn ends when the model produces no further tool calls or the loop is cancelled. Cancellation is cooperative and preserves streamed text already delivered to the user.

## Concrete Example

In the session log, each turn is bracketed by durable turn open/close events, and `dsh-agent-loop` owns the turn/step machine.

## Analogy

It is one round of a conversation: you speak, it acts, it speaks back — then the round closes.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[context|Context]]
- [[session|Session]]
