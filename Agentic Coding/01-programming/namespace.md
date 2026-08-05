---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Namespace

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

When programs get large, name collisions happen. Namespaces keep names organised so they don't clash.

## 📋 Concrete Example

The `math` module has `pi`. The `numpy` package also has `pi`. `math.pi` and `numpy.pi` are in different namespaces, so no clash.

## 🔗 Analogy

Phone extensions in an office - Bob in Sales is extension 101, Bob in Engineering is also 101. The department (namespace) tells you which Bob.

## Related Concepts

- [[scope|Scope]]
- [[module|Module]]
- [[import|Import]]
