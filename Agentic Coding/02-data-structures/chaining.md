---
tags: [Data-Structures]
domain: Data Structures
---

# Chaining

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A collision resolution strategy where each bucket holds a linked list of all entries that hashed to that index.

## 📋 Concrete Example

Index 5 has a linked list: Ada -> Bob -> Charlie. To find Bob, hash to index 5, then scan the small list. If the list is short, it is still very fast.

## 🔗 Analogy

A shared locker used by all students whose surnames start with `C`. Their bags are lined up inside on hooks (a chain). You look through the hooks to find yours.

## Related Concepts

- [[collision|Collision]]
- [[open-addressing|Open Addressing]]
- [[hash-table|Hash Table]]
- [[linked-list|Linked List]]
