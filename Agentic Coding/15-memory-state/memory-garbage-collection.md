---
tags: [Memory-&-State]
domain: Memory & State
---

# Memory Garbage Collection

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

Automatically cleaning up memories that are expired, duplicated, or no longer relevant. Keeps the memory system lean.

## 📋 Concrete Example

Garbage collection runs daily: removes memories older than 90 days with access_count < 2, merges duplicate memories, archives low-importance ones. Automatic cleanup.

## 🔗 Analogy

Spring cleaning your room - you throw away broken items, donate clothes you do not wear, and organize what is left. Memory garbage collection does this automatically for agent memories.

## Related Concepts

- [[memory-decay|Memory Decay]]
- [[forgetting|Forgetting]]
- [[memory-management|Memory Management]]
