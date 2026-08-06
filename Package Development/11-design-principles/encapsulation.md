---
tags: [Design-Principles]
domain: Design Principles
---

# Encapsulation

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Encapsulation hides internal state and requires all interaction through methods. This protects data from unexpected changes and makes behavior easier to evolve safely.

## 📋 Concrete Example

A `BankAccount` class stores `balance` privately and exposes `deposit(amount)` and `withdraw(amount)` methods. No outside code can set `balance` directly, preventing errors.

## 🔗 Analogy

A vending machine hides its wiring behind buttons. You press "cola" and get a drink; you never touch the gears, so you cannot break the mechanism.

## Related Concepts

- [[abstraction|Abstraction]]
- [[solid|SOLID]]
- [[separation-of-concerns|Separation of Concerns]]
