---
tags: [Algorithms]
domain: Algorithms
---

# Cocktail Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A variation of bubble sort that alternates direction: forward pass bubbles the largest to the end, backward pass bubbles the smallest to the front. Slightly faster than bubble sort.

## 📋 Concrete Example

On [5, 1, 3, 9, 2]: forward pass moves 9 to end -> [1, 3, 5, 2, 9]. Backward pass moves 1 to front -> [1, 3, 5, 2, 9]. Repeat, shrinking the range each time.

## 🔗 Analogy

A bartender shaking a cocktail shaker back and forth. The forward shake pushes big bubbles up, the backward shake pushes small bubbles down. Both ends get sorted faster than shaking in one direction only.

## Related Concepts

- [[bubble-sort|Bubble Sort]]
- [[bidirectional|Bidirectional]]
- [[sorting|Sorting]]
- [[stable-sort|Stable Sort]]
