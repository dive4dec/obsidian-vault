---
tags: [Algorithms]
domain: Algorithms
---

# Bogo Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

The joke sorting algorithm: randomly shuffle the array and check if it is sorted. Repeat until sorted. Average case is O(n * n!), making it impractical but a fun teaching tool.

## 📋 Concrete Example

Shuffle [3, 1, 2] -> [2, 3, 1] (not sorted). Shuffle again -> [1, 2, 3] (sorted!). For 10 elements, the average number of shuffles is about 13 million. Pure luck.

## 🔗 Analogy

Throwing a deck of cards in the air, picking them up randomly, and checking if they are in order. If not, throw them again. You might get lucky, or you might be there forever.

## Related Concepts

- [[sorting|Sorting]]
- [[randomized-algorithm|Randomized Algorithm]]
- [[permutation|Permutation]]
- [[worst-case|Worst Case]]
