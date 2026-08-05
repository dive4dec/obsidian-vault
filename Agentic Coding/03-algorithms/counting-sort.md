---
tags: [Algorithms]
domain: Algorithms
---

# Counting Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

When keys are small integers, count how many of each value exist, then reconstruct the sorted array. O(n + k), faster than comparison sorts.

## 📋 Concrete Example

Sort [3, 1, 4, 1, 5, 3]: count 1 appears 2x, 3 appears 2x, 4 appears 1x, 5 appears 1x. Output: [1, 1, 3, 3, 4, 5]. No comparisons needed.

## 🔗 Analogy

Counting coloured balls in a bag. You count 3 red, 2 blue, 5 green. Then you lay them out: red, red, red, blue, blue, green, green... Sorted by colour.

## Related Concepts

- [[sorting|Sorting]]
- [[non-comparison-sort|Non-Comparison Sort]]
- [[radix-sort|Radix Sort]]
- [[bucket-sort|Bucket Sort]]
- [[integer-sort|Integer Sort]]
