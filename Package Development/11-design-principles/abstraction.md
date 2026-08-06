---
tags: [Design-Principles]
domain: Design Principles
---

# Abstraction

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Abstraction exposes essential behavior while hiding implementation details. It reduces complexity so you can reason about what something does without knowing how it works inside.

## 📋 Concrete Example

A `sort()` function takes a list and returns it sorted. You do not need to know if it uses quicksort or timsort — the interface hides that decision behind a clean name.

## 🔗 Analogy

A car steering wheel abstracts away the suspension and tire mechanics. You turn the wheel left and the car goes left; you never think about the linkage underneath.

## Related Concepts

- [[encapsulation|Encapsulation]]
- [[interface-segregation|Interface Segregation]]
- [[dependency-inversion|Dependency Inversion]]
