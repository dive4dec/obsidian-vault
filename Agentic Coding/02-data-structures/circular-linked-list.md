---
tags: [Data-Structures]
domain: Data Structures
---

# Circular Linked List

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When the last node points back to the first, the list forms a circle. This is useful for round-robin scheduling and turn-based games.

## 📋 Concrete Example

A -> B -> C -> A (back to start). There is no null end. You keep cycling through the same nodes endlessly.

## 🔗 Analogy

A clock face. After 12 comes 1 again. There is no `end` to the hours -- they cycle forever in a circle.

## Related Concepts

- [[linked-list|Linked List]]
- [[round-robin|Round-Robin]]
- [[cyclic-structure|Cyclic Structure]]
