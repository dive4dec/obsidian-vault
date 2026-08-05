---
tags: [Algorithms]
domain: Algorithms
---

# Sliding Window

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Maintain a `window` over a subarray and slide it efficiently, updating the result without recomputing from scratch. Great for range/substring problems.

## 📋 Concrete Example

Find max sum of 3 consecutive elements in [1, 4, 2, 10, 23]: window [1,4,2]=7, slide to [4,2,10]=16, slide to [2,10,23]=35. Max is 35. Each slide just adds and subtracts one element.

## 🔗 Analogy

Looking through a magnifying glass at a long scroll. You slide the glass along, and at each position you just update what you see rather than re-examining the whole scroll.

## Related Concepts

- [[two-pointers|Two Pointers]]
- [[array-technique|Array Technique]]
- [[subarray|Subarray]]
- [[fixed-window|Fixed Window]]
- [[variable-window|Variable Window]]
