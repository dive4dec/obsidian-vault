---
tags: [Algorithms]
domain: Algorithms
---

# Huffman Coding

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

A greedy algorithm that compresses data by using shorter codes for frequent characters and longer codes for rare ones. Used in ZIP files.

## 📋 Concrete Example

In English, `e` is common, `z` is rare. Huffman gives `e` a 2-bit code and `z` a 10-bit code. Total bits are much fewer than fixed 8-bit per character.

## 🔗 Analogy

Morse code: common letters like `E` have a short signal (one dot), rare letters like `Q` have a long signal (dash-dash-dot-dash). Huffman does this automatically.

## Related Concepts

- [[greedy-algorithm|Greedy Algorithm]]
- [[compression|Compression]]
- [[prefix-code|Prefix Code]]
- [[variable-length-code|Variable-Length Code]]
