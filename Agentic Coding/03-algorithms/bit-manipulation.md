---
tags: [Algorithms]
domain: Algorithms
---

# Bit Manipulation

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Using bitwise operations (AND, OR, XOR, shift) to solve problems efficiently. Often O(1) space and very fast.

## 📋 Concrete Example

Check if even: `n & 1 == 0`. Swap without temp: `a ^= b; b ^= a; a ^= b`. Find unique element: XOR all elements, duplicates cancel out.

## 🔗 Analogy

A light switch panel where each switch is a bit. XOR flips switches. AND checks if both are on. You solve puzzles by flipping switches in patterns rather than one at a time.

## Related Concepts

- [[bitwise-operator|Bitwise Operator]]
- [[xor|XOR]]
- [[bit-shift|Bit Shift]]
- [[bitmask|Bitmask]]
