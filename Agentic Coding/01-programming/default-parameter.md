---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Default Parameter

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Sometimes a parameter usually has the same value. Default parameters let callers skip it when they want the default.

## 📋 Concrete Example

`def greet(name, greeting='Hello'): return greeting + ', ' + name`. `greet('Alice')` uses `Hello`. `greet('Alice', 'Hi')` uses `Hi`.

## 🔗 Analogy

A restaurant menu - 'comes with chips by default (default parameter). If you want salad instead, just say so (override the default).'

## Related Concepts

- [[parameter|Parameter]]
- [[argument|Argument]]
- [[function|Function]]
