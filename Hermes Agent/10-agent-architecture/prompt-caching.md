---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Prompt Caching

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Prompt caching saves the unchanged part of the prompt so it does not need to be processed again, making responses faster and cheaper.

## Concrete Example

The system prompt and tool definitions stay the same every turn. The cache reuses them so only new messages are processed fresh.

## Analogy

Like saving a draft email: next time you only type the new part instead of rewriting everything.

## Related Concepts

- [[prompt-builder|prompt builder]]
- [[environment-hints|environment hints]]
- [[context-compression-trigger|context compression trigger]]
