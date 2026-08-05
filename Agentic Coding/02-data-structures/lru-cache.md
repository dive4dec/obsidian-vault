---
tags: [Data-Structures]
domain: Data Structures
---

# LRU Cache

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you have limited memory and must evict old data, an LRU (Least Recently Used) cache removes the item that was accessed longest ago.

## 📋 Concrete Example

Cache size 3: access A, B, C. Access A again (A is now recent). Add D -- C is evicted (least recently used). Order: D, A, B. C is gone.

## 🔗 Analogy

A desk that only holds 3 textbooks. When you need a 4th, you put away the book you have not opened in the longest time. The book you just used stays on the desk.

## Related Concepts

- [[cache-eviction|Cache Eviction]]
- [[hash-map|Hash Map]]
- [[doubly-linked-list|Doubly Linked List]]
- [[mru-cache|MRU Cache]]
- [[cache-hit|Cache Hit]]
