---
tags: [Data-Structures]
domain: Data Structures
---

# Immutable Data Structure

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When data must never change after creation -- for safety, concurrency, or debugging -- immutable structures create new versions instead of modifying in place.

## 📋 Concrete Example

Python tuples are immutable: `(1, 2, 3)`. You cannot change an element. To `modify`, you create a new tuple: `t2 = t + (4,)`.

## 🔗 Analogy

A carved stone monument. Once carved, the text cannot be changed. If you want a new message, you carve a new stone. The old one remains untouched as a record.

## Related Concepts

- [[tuple|Tuple]]
- [[persistent-data-structure|Persistent Data Structure]]
- [[functional-programming|Functional Programming]]
- [[copy-on-write|Copy-on-Write]]
