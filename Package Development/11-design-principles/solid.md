---
tags: [Design-Principles]
domain: Design Principles
---

# SOLID

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

SOLID is five principles that help you write code that is easy to maintain and extend over time. Following them prevents bugs and makes teamwork smoother because each piece of code has a clear job.

## 📋 Concrete Example

A `Shape` base class with `Circle` and `Square` subclasses lets you add new shapes without changing drawing code. Each class has one responsibility: shapes compute area, `Renderer` draws them.

## 🔗 Analogy

Think of a restaurant kitchen where each chef handles one station — grill, salad, dessert. If one chef tries to do everything, orders get delayed and confused; specialization keeps the kitchen running smoothly.

## Related Concepts

- [[single-responsibility|Single Responsibility]]
- [[open-closed|Open-Closed]]
- [[liskov-substitution|Liskov Substitution]]
