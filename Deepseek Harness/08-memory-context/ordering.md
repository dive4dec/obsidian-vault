---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Ordering

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The order messages and prompt sections are presented to the model. `dsh-system-prompt` owns a configured tool order and an ordered system prompt, while `dsh-agent-instructions` presents its chain broad-to-specific (project root down to the working directory) so more specific guidance comes last and takes precedence.

## Concrete Example

`dsh-agent-instructions` orders the instruction chain from the user-global `$DSH_HOME/AGENTS.md` down through the project root to the session working directory, broad-to-specific.

## Analogy

A stack of notes where the most specific, latest note sits on top so you read it last and give it the most weight.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[instructions|Instructions]]
- [[role|Message Role]]
- [[prompt-assembly|Prompt Assembly]]
