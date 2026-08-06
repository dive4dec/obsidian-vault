---
tags: [Design-Principles]
domain: Design Principles
---

# Composition Over Inheritance

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Prefer building objects from smaller, focused components over deep inheritance chains. Inheritance locks you into a rigid hierarchy, while composition lets you change behavior at runtime.

## 📋 Concrete Example

A `Robot` class with `walk()` and `talk()` components (mixed in) is more flexible than `Robot extends WalkingTalkingMammal`. You can swap `talk()` for a silent mode without touching `walk()`.

## 🔗 Analogy

Building with Lego lets you attach and remove pieces freely. A carved wooden statue cannot change its shape without being recut — that is inheritance, rigid and permanent.

## Related Concepts

- [[solid|SOLID]]
- [[polymorphism|Polymorphism]]
- [[encapsulation|Encapsulation]]
