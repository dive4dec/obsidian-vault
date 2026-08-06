---
tags: [Design-Principles]
domain: Design Principles
---

# Liskov Substitution

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Subtypes must be replaceable for their base types without breaking the program. If a subclass changes behavior unexpectedly, code that relies on the parent class will fail in confusing ways.

## 📋 Concrete Example

If `Bird` has a `fly()` method, then `Penguin` should not inherit `Bird` directly. A penguin that throws an error on `fly()` violates substitution, so restructure the hierarchy.

## 🔗 Analogy

If you order a "vehicle" and receive a bicycle, you can still ride it to school. But if you receive a toy car that cannot move, the promise is broken — substitution failed.

## Related Concepts

- [[solid|SOLID]]
- [[polymorphism|Polymorphism]]
- [[composition-over-inheritance|Composition Over Inheritance]]
