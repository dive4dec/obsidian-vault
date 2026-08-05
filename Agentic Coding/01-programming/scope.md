---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Scope

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Variables created inside a function shouldn't leak outside - scope controls where variables are visible.

## 📋 Concrete Example

`def f(): x = 10`. Outside `f`, `x` doesn't exist - it's local scope. Global variables are visible everywhere but can cause bugs.

## 🔗 Analogy

Rooms in a house - a variable in the kitchen (local scope) can't be seen from the bedroom. A note on the front door (global) is visible to everyone.

## Related Concepts

- [[variable|Variable]]
- [[local-variable|Local Variable]]
- [[global-variable|Global Variable]]
- [[namespace|Namespace]]
