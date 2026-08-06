---
tags: [Design-Principles]
domain: Design Principles
---

# Single Responsibility

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Every class or function should have one reason to change. When code does too many things, fixing one bug can break something unrelated, making maintenance risky and confusing.

## 📋 Concrete Example

A `User` class that also sends emails violates this principle. Split it into `User` for data and `EmailService` for sending, so each can evolve independently.

## 🔗 Analogy

Like a Swiss army knife with 30 tools — it is hard to use any single tool well. A dedicated chef's knife cuts better because it is designed for one purpose.

## Related Concepts

- [[solid|SOLID]]
- [[separation-of-concerns|Separation of Concerns]]
- [[coupling-cohesion|Coupling and Cohesion]]
