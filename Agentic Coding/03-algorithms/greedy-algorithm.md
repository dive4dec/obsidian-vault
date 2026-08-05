---
tags: [Algorithms]
domain: Algorithms
---

# Greedy Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Make the locally best choice at each step, hoping it leads to a globally optimal solution. Simple and fast, but not always optimal.

## 📋 Concrete Example

Coin change with [100, 50, 10, 1] for 163: take 100 (greedy), then 50, then 10, then 1,1,1. Total: 6 coins. Optimal! But with [4, 3, 1] for 6, greedy gives 4+1+1 (3 coins) instead of 3+3 (2 coins).

## 🔗 Analogy

At a buffet, you always pick the dish that looks best right now. This might not give the best overall meal, but it is a simple strategy that often works well.

## Related Concepts

- [[algorithm-design|Algorithm Design]]
- [[optimal-substructure|Optimal Substructure]]
- [[local-optimum|Local Optimum]]
- [[huffman-coding|Huffman Coding]]
