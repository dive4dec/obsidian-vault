---
tags: [Design-Principles]
domain: Design Principles
---

# Dependency Inversion

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

High-level modules should depend on abstractions, not concrete implementations. This lets you swap databases or services without rewriting core business logic.

## 📋 Concrete Example

An `OrderService` depends on an `IOrderRepository` interface, not a `SQLOrderRepository` directly. In tests you inject a `FakeOrderRepository` for fast, isolated testing.

## 🔗 Analogy

A laptop charges through a standard USB-C port, not a proprietary cable. Any brand charger that fits USB-C works, so you are never stuck without power.

## Related Concepts

- [[solid|SOLID]]
- [[abstraction|Abstraction]]
- [[coupling-cohesion|Coupling and Cohesion]]
