---
tags: [Design-Principles]
domain: Design Principles
---

# Coupling and Cohesion

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Good design aims for low coupling (modules depend on little else) and high cohesion (each module's parts belong together). This balance makes code easier to test, reuse, and change.

## 📋 Concrete Example

A `PaymentService` that only talks to a `PaymentGateway` interface has low coupling. All its methods deal with payments, so cohesion is high — the module feels focused.

## 🔗 Analogy

A sports team with low coupling means players do not need to know every teammate's every move. High cohesion means each player excels at their position and works toward one goal.

## Related Concepts

- [[single-responsibility|Single Responsibility]]
- [[law-of-demeter|Law of Demeter]]
- [[separation-of-concerns|Separation of Concerns]]
