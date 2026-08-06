---
tags: [Refactoring]
domain: Refactoring
---

# Extract Interface

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

When multiple classes share behavior but no common parent, extracting an interface formalizes the contract. This enables polymorphism and easier testing through fakes or mocks.

## 📋 Concrete Example

`CreditCardProcessor` and `PayPalProcessor` both have `charge(amount)`. Extract an `IPaymentProcessor` interface so `Checkout` can accept either, and tests inject a `FakeProcessor`.

## 🔗 Analogy

Different phone brands agree on what a "charger port" means even though their phones differ. The standard interface lets any charger work with any compatible phone.

## Related Concepts

- [[interface-segregation|Interface Segregation]]
- [[dependency-inversion|Dependency Inversion]]
- [[polymorphism|Polymorphism]]
