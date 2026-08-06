---
tags: [Design-Principles]
domain: Design Principles
---

# Polymorphism

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Polymorphism lets different types respond to the same method call in their own way. This lets you write generic code that works with any compatible type, reducing duplication.

## 📋 Concrete Example

A `speak()` method on `Dog` returns "woof" and on `Cat` returns "meow". A loop calling `animal.speak()` over a list works for any animal subclass without conditionals.

## 🔗 Analogy

A universal remote has a "play" button that works on any TV brand. The remote does not care if it is Sony or Samsung — each TV knows how to respond to "play".

## Related Concepts

- [[open-closed|Open-Closed]]
- [[liskov-substitution|Liskov Substitution]]
- [[composition-over-inheritance|Composition Over Inheritance]]
