---
tags: [Data-Structures]
domain: Data Structures
---

# Min-Heap

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A heap where the parent is always smaller than or equal to its children. The minimum value sits at the root.

## 📋 Concrete Example

`import heapq; h = [5, 3, 8]; heapq.heapify(h); heapq.heappush(h, 1); heapq.heappop(h)` returns 1 (the smallest).

## 🔗 Analogy

A queue where the shortest person always gets to go first. No matter when they arrived, the shortest person is always at the front.

## Related Concepts

- [[heap|Heap]]
- [[max-heap|Max-Heap]]
- [[binary-heap|Binary Heap]]
- [[priority-queue|Priority Queue]]
