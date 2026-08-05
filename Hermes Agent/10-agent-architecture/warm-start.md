---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Warm Start

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

A warm start reuses cached prompts and loaded tools from a previous run, making the next conversation start faster.

## Concrete Example

After one chat ends, the next one starts in 1 second instead of 5 because the system prompt is already cached.

## Analogy

Like a warm-up before exercise: your muscles are ready so you perform better from the start.

## Related Concepts

- [[prompt-caching|prompt caching]]
- [[agent-loop|Agent Loop]]
- [[config-layers|Config Layers]]
