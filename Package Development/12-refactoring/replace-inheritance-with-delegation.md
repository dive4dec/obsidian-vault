---
tags: [Refactoring]
domain: Refactoring
---

# Replace Inheritance with Delegation

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Inheritance is for "is-a" relationships, but often misused for code reuse. When a subclass only wants some parent behavior, delegation (holding a reference) is more flexible and safer.

## 📋 Concrete Example

A `Stack` should not inherit `Vector` just to reuse storage. Instead, `Stack` holds a `list` internally and delegates `push` and `pop` to it, exposing only stack-like methods.

## 🔗 Analogy

You do not become a professional chef to use their kitchen. You rent the kitchen and hire the chef for specific tasks — you get what you need without the unwanted obligations.

## Related Concepts

- [[composition-over-inheritance|Composition Over Inheritance]]
- [[liskov-substitution|Liskov Substitution]]
- [[extract-interface|Extract Interface]]
