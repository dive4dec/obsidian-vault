---
tags: [Algorithms]
domain: Algorithms
---

# XOR Trick

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

XOR (^) has special properties: a^a=0, a^0=a, and it is commutative. This enables elegant solutions for finding unique elements and swapping.

## 📋 Concrete Example

Array [2, 3, 2, 4, 4]: XOR all -> 2^3^2^4^4 = (2^2)^(4^4)^3 = 0^0^3 = 3. The unique element is 3, found without extra memory.

## 🔗 Analogy

A game where matching cards cancel each other out. After pairing all duplicates, the one card left face-up is the unique one. XOR does this cancellation automatically.

## Related Concepts

- [[bit-manipulation|Bit Manipulation]]
- [[exclusive-or|Exclusive Or]]
- [[unique-element|Unique Element]]
- [[swap|Swap]]
