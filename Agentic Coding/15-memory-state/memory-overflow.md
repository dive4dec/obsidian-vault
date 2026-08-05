---
tags: [Memory-&-State]
domain: Memory & State
---

# Memory Overflow

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

When the memory system exceeds its capacity. The agent must forget old memories or upgrade storage.

## 📋 Concrete Example

Vector database has 1M memories, capacity is 1.2M. Approaching overflow. Solution: decay and archive low-importance memories, freeing space.

## 🔗 Analogy

A glass overflowing with water - you pour too much in, it spills. You need a bigger glass (more storage) or to drink some (forget). Memory overflow is the agent's glass spilling.

## Related Concepts

- [[memory-decay|Memory Decay]]
- [[forgetting|Forgetting]]
- [[memory-management|Memory Management]]
