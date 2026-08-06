---
tags: [Design-Principles]
domain: Design Principles
---

# Open-Closed

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Code should be open for extension but closed for modification. This means you can add new features without editing tested, working code, reducing the risk of breaking existing behavior.

## 📋 Concrete Example

A `PaymentProcessor` using a strategy pattern lets you add `ApplePayProcessor` as a new class. You never touch existing `CreditCardProcessor` code, so it stays safe.

## 🔗 Analogy

Like Lego blocks — you can add new pieces on top without reshaping the ones already in place. The existing structure stays intact while you build outward.

## Related Concepts

- [[solid|SOLID]]
- [[polymorphism|Polymorphism]]
- [[abstraction|Abstraction]]
