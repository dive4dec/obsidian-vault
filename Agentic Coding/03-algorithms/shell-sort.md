---
tags: [Algorithms]
domain: Algorithms
---

# Shell Sort

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

An improved insertion sort that first sorts elements far apart, then gradually reduces the gap. This pre-sorting makes the final insertion sort pass much faster.

## 📋 Concrete Example

Sort [5, 3, 8, 1, 4, 7] with gap 3: compare positions 0-3, 1-4, 2-5, swap if needed. Then gap 1 (normal insertion sort). The pre-sorting means fewer shifts in the final pass.

## 🔗 Analogy

Arranging books on a shelf by first roughly grouping them every 3rd book, then every 2nd, then adjacent. Each pass gets closer to sorted, so the final adjacent pass does very little work.

## Related Concepts

- [[insertion-sort|Insertion Sort]]
- [[gap-sequence|Gap Sequence]]
- [[sorting|Sorting]]
- [[in-place-sort|In-Place Sort]]
