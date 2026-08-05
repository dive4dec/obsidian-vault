---
tags: [Algorithms]
domain: Algorithms
---

# Tail Recursion

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

When the recursive call is the very last operation, the compiler can optimise it to avoid growing the call stack. Some languages require this for deep recursion.

## 📋 Concrete Example

Tail-recursive factorial: `def fact(n, acc=1): if n <= 1: return acc; return fact(n-1, n*acc)`. The multiplication happens before the call, so no stack frame is needed.

## 🔗 Analogy

A relay race where each runner passes the baton and immediately leaves the track. Only one runner is on the track at a time (no stack buildup), unlike regular recursion where all runners wait on the track.

## Related Concepts

- [[recursion|Recursion]]
- [[tail-call-optimization|Tail Call Optimization]]
- [[call-stack|Call Stack]]
- [[iterative-conversion|Iterative Conversion]]
