---
tags: [Data-Structures]
domain: Data Structures
---

# Load Factor

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

The ratio of stored entries to total buckets. When it gets too high, collisions increase and the hash table should be resized.

## 📋 Concrete Example

A hash table with 10 buckets and 7 entries has load factor 0.7. At 0.7, it is getting crowded. Typically, resize when load factor exceeds 0.75.

## 🔗 Analogy

How full a car park is. At 30% full, finding a spot is easy. At 90% full, you circle around searching. When it gets too full, the car park needs to expand.

## Related Concepts

- [[hash-table|Hash Table]]
- [[resize|Resize]]
- [[rehashing|Rehashing]]
- [[collision|Collision]]
