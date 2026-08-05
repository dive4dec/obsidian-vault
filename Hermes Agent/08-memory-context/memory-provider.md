---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Memory Provider

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

The system that stores and retrieves memories. Different providers have different features: built-in is simple, Honcho is shared, Mem0 is smart.

## Concrete Example

Config: memory_provider: builtin (simple, local). Or memory_provider: honcho (shared across agents). Or memory_provider: mem0 (AI-organised memories). Each has trade-offs.

## Analogy

Choosing a cloud storage service - Google Drive (built-in, simple), Dropbox (shared), or iCloud (smart integration). Memory providers are storage services for agent memories.

## Related Concepts

- [[memory-enabled|Memory Enabled]]
- [[built-in-memory|Built-in Memory]]
- [[honcho-memory|Honcho Memory]]
- [[mem0-memory|Mem0 Memory]]
