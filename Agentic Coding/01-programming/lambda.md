---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Lambda

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Sometimes you need a tiny function without bothering to name it - lambda creates anonymous functions.

## 📋 Concrete Example

`sorted(names, key=lambda x: len(x))` sorts names by length. The lambda is a mini function: takes `x`, returns `len(x)`.

## 🔗 Analogy

A disposable cup - you use it once for a specific purpose (sorting, filtering) and throw it away. No need to give it a name or wash it.

## Related Concepts

- [[function|Function]]
- [[anonymous-function|Anonymous Function]]
- [[higher-order-function|Higher-Order Function]]
