---
tags: [Algorithms]
domain: Algorithms
---

# Binary Search

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

On sorted data, repeatedly halve the search range: check the middle, discard the half that cannot contain the target. O(log n).

## 📋 Concrete Example

Search for 25 in sorted [10, 20, 25, 30, 40, 50]: middle is 30, 25 < 30 so search left half. Middle of [10, 20, 25] is 20, 25 > 20 so search right. Found 25!

## 🔗 Analogy

Guessing a number between 1 and 100. You always guess the middle (50). If told `higher`, you guess 75. Each guess eliminates half the remaining numbers.

## Related Concepts

- [[searching|Searching]]
- [[sorted-data|Sorted Data]]
- [[divide-and-conquer|Divide and Conquer]]
- [[logarithmic-time|Logarithmic Time]]
