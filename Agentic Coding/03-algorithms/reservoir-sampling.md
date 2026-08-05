---
tags: [Algorithms]
domain: Algorithms
---

# Reservoir Sampling

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

When you need a random sample from a stream of unknown length with limited memory, reservoir sampling selects k items uniformly at random in one pass.

## 📋 Concrete Example

To pick 1 random item from a stream of unknown length: keep the first item. For item i (i > 1), replace the kept item with probability 1/i. Every item has equal probability of being chosen.

## 🔗 Analogy

Picking 1 random student from a parade of unknown length. You hold hands with the first student. For each new student, you flip a coin (with shrinking probability) to decide whether to switch. At the end, every student had an equal chance.

## Related Concepts

- [[sampling|Sampling]]
- [[streaming-algorithm|Streaming Algorithm]]
- [[uniform-distribution|Uniform Distribution]]
- [[one-pass-algorithm|One-Pass Algorithm]]
