---
tags: [Data-Structures]
domain: Data Structures
---

# Ring Buffer

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

Another name for a circular buffer. It uses modular arithmetic to wrap the index around, creating a logical ring from a linear array.

## 📋 Concrete Example

Index = (index + 1) % size. For size 4: 0 -> 1 -> 2 -> 3 -> 0 -> 1... The modulo operation creates the ring from a flat array.

## 🔗 Analogy

A clock with 12 positions. After 12, you do not go to 13; you wrap back to 1. The clock face is a ring buffer of 12 slots.

## Related Concepts

- [[circular-buffer|Circular Buffer]]
- [[modular-arithmetic|Modular Arithmetic]]
- [[fixed-size-buffer|Fixed-Size Buffer]]
