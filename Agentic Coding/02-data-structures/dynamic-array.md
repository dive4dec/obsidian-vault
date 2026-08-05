---
tags: [Data-Structures]
domain: Data Structures
---

# Dynamic Array

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Fixed arrays cannot grow. A dynamic array automatically resizes when full, giving you flexibility without manual memory management.

## 📋 Concrete Example

Python lists are dynamic arrays: `nums = [1]; nums.append(2); nums.append(3)` -- the list grows as needed. Under the hood it may copy to a bigger buffer.

## 🔗 Analogy

A stretchy notebook. You start with 10 lines, but when you fill the page a new page with more lines is glued on so you never run out of space.

## Related Concepts

- [[array|Array]]
- [[capacity|Capacity]]
- [[amortized-cost|Amortized Cost]]
- [[vector|Vector]]
