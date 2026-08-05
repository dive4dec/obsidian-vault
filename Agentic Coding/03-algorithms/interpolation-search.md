---
tags: [Algorithms]
domain: Algorithms
---

# Interpolation Search

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Like binary search, but instead of always checking the middle, it estimates where the target likely is based on value distribution. Faster for uniform data.

## 📋 Concrete Example

Search for 25 in [10, 20, 30, 40, 50]: since 25 is between 10 and 50, estimate its position as about halfway. Check index 2 (value 30), then narrow down.

## 🔗 Analogy

Finding a word in a dictionary. You do not open to the exact middle; you estimate based on the first letter. `Cat` is near the start, so you open early in the book.

## Related Concepts

- [[searching|Searching]]
- [[binary-search|Binary Search]]
- [[sorted-data|Sorted Data]]
- [[uniform-distribution|Uniform Distribution]]
