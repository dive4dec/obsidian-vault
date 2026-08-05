---
tags: [Algorithms]
domain: Algorithms
---

# Radix Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Sort numbers digit by digit, from least significant to most significant, using counting sort at each digit. O(d * (n + k)).

## 📋 Concrete Example

Sort [170, 45, 75, 90]: sort by units digit -> [170, 90, 45, 75]. Sort by tens digit -> [170, 45, 75, 90]. Sort by hundreds -> [45, 75, 90, 170].

## 🔗 Analogy

Sorting library books by call number: first sort by the last digit of the number, then the middle digit, then the first digit. After three passes, all books are in order.

## Related Concepts

- [[sorting|Sorting]]
- [[counting-sort|Counting Sort]]
- [[non-comparison-sort|Non-Comparison Sort]]
- [[digit-by-digit|Digit-by-Digit]]
