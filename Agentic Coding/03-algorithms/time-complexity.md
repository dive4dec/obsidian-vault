---
tags: [Algorithms]
domain: Algorithms
---

# Time Complexity

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

How the running time of an algorithm grows as the input size increases. This determines whether an algorithm is practical for large inputs.

## 📋 Concrete Example

A linear search through 100 items takes 100 steps. Through 1,000,000 items takes 1,000,000 steps. It scales as O(n). Binary search takes only about 20 steps for 1,000,000 items -- O(log n).

## 🔗 Analogy

Time to find a book by scanning every shelf (O(n), linear) vs. using the catalogue to jump to the right shelf (O(log n), logarithmic). The catalogue scales far better as the library grows.

## Related Concepts

- [[big-o-notation|Big-O Notation]]
- [[space-complexity|Space Complexity]]
- [[worst-case|Worst Case]]
- [[best-case|Best Case]]
