---
tags: [Algorithms]
domain: Algorithms
---

# Manachers Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Find the longest palindromic substring in O(n) time. Cleverly reuses information from previously found palindromes.

## 📋 Concrete Example

In `racecar`, the longest palindrome is `racecar` itself (7 chars). Manacher finds this in linear time by exploiting symmetry.

## 🔗 Analogy

Finding the longest mirror-image word in a sentence. Manacher uses the fact that palindromes are symmetric -- if you found one on the left, a similar one might exist on the right.

## Related Concepts

- [[palindrome|Palindrome]]
- [[string-algorithm|String Algorithm]]
- [[linear-time|Linear Time]]
- [[symmetry-exploitation|Symmetry Exploitation]]
