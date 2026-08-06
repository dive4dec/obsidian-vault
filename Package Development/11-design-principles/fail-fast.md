---
tags: [Design-Principles]
domain: Design Principles
---

# Fail Fast

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Detect errors immediately and report them clearly, rather than letting bad data flow silently through the system. Early failures are cheaper to diagnose and fix than late, mysterious bugs.

## 📋 Concrete Example

A function `divide(a, b)` that checks `if b == 0: raise ValueError("b cannot be zero")` fails fast. Without this, you might get a confusing `ZeroDivisionError` deeper in a calculation.

## 🔗 Analogy

A smoke detector beeps the moment it senses smoke, not after the house is fully ablaze. Early warnings give you time to act before damage spreads.

## Related Concepts

- [[defensive-programming|Defensive Programming]]
- [[convention-over-configuration|Convention Over Configuration]]
- [[encapsulation|Encapsulation]]
