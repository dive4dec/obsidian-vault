---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Reduce

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Combining all items in a collection into a single value - summing, multiplying, finding the max - is what reduce does.

## 📋 Concrete Example

`from functools import reduce; reduce(lambda a,b: a+b, [1,2,3,4])` gives 10. It folds the list into one number.

## 🔗 Analogy

Making a smoothie - you put in many fruits (the list), blend them all together (the reducing function), and get one smoothie (the single result).

## Related Concepts

- [[higher-order-function|Higher-Order Function]]
- [[map|Map]]
- [[accumulator|Accumulator]]
