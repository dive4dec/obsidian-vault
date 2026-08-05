---
tags: [Memory-&-State]
domain: Memory & State
---

# Memory Hierarchy

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

Different tiers of memory: fast/small (context window) -> medium (session state) -> slow/large (long-term database). Like CPU cache hierarchy.

## 📋 Concrete Example

Tier 1 (instant): context window (8K tokens). Tier 2 (fast): session database (100KB). Tier 3 (slower): long-term vector database (1GB). The agent uses the fastest tier that has the needed info.

## 🔗 Analogy

Computer memory hierarchy - CPU cache (fastest, smallest) -> RAM (medium) -> hard drive (slow, huge). Each tier trades speed for capacity. Memory hierarchy does this for agents.

## Related Concepts

- [[internal-memory|Internal Memory]]
- [[external-memory|External Memory]]
- [[context-window|Context Window]]
