---
tags: [Data-Structures]
domain: Data Structures
---

# Open Addressing

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A collision resolution strategy where collided entries are placed in the next available bucket, using no extra data structures.

## 📋 Concrete Example

Key `Bob` hashes to index 5, but it is occupied. Try index 6 -- empty! Place Bob there. On lookup, if index 5 is not Bob, check 6, then 7, and so on.

## 🔗 Analogy

A car park where your assigned spot is taken. You drive to the next available spot and park there. To find your car later, you start at your assigned spot and check forward.

## Related Concepts

- [[collision|Collision]]
- [[chaining|Chaining]]
- [[linear-probing|Linear Probing]]
- [[hash-table|Hash Table]]
