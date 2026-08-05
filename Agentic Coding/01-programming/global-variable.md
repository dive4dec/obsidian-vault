---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Global Variable

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Some variables need to be accessible everywhere - configuration settings, game state.

## 📋 Concrete Example

`MAX_HEALTH = 100` at the top of the file is global. Any function can read it. But modifying it from inside a function requires `global` keyword.

## 🔗 Analogy

A school notice board - anyone in any classroom can read it. But if you want to change it, you need special permission.

## Related Concepts

- [[scope|Scope]]
- [[local-variable|Local Variable]]
- [[side-effect|Side Effect]]
