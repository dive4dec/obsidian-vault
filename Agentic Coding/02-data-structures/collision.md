---
tags: [Data-Structures]
domain: Data Structures
---

# Collision

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Two different keys hash to the same index. Collisions are inevitable and must be handled for the hash table to work correctly.

## 📋 Concrete Example

Keys `Ada` and `Bob` both hash to index 5. The table must store both. Common fixes: chaining (linked list at index 5) or open addressing (find the next empty slot).

## 🔗 Analogy

Two students whose surnames start with `C` are assigned the same locker. The school handles this by putting a divider in the locker (chaining) or finding the next empty locker nearby (probing).

## Related Concepts

- [[hash-table|Hash Table]]
- [[chaining|Chaining]]
- [[open-addressing|Open Addressing]]
- [[hash-function|Hash Function]]
