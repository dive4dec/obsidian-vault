---
tags: [Data-Structures]
domain: Data Structures
---

# Bounds Checking

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Accessing an index outside the array's range causes errors or crashes. Bounds checking prevents this dangerous mistake.

## 📋 Concrete Example

`arr = [1, 2, 3]`. `arr[5]` raises `IndexError: list index out of range` in Python. Some languages like C silently read garbage memory.

## 🔗 Analogy

A building with floors 1 to 10. If you press button 15 in the lift, nothing happens -- there is no floor 15. Bounds checking is that safety lock.

## Related Concepts

- [[index|Index]]
- [[array|Array]]
- [[indexerror|IndexError]]
- [[buffer-overflow|Buffer Overflow]]
