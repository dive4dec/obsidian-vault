---
tags: [Algorithms]
domain: Algorithms
---

# Monotone Stack

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A stack that maintains elements in sorted order (increasing or decreasing). Used for 'next greater element' and similar problems in O(n).

## 📋 Concrete Example

Find next greater element for each in [2, 1, 5]: for 2, next greater is 5; for 1, next greater is 5; for 5, none. The stack tracks candidates and pops when a greater one is found.

## 🔗 Analogy

A row of students of increasing height. When a taller student arrives, all shorter students before them can see their 'next taller' and leave the line.

## Related Concepts

- [[stack|Stack]]
- [[next-greater-element|Next Greater Element]]
- [[linear-time|Linear Time]]
- [[monotonic-property|Monotonic Property]]
