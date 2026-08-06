---
tags: [Design-Principles]
domain: Design Principles
---

# Interface Segregation

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Clients should not be forced to depend on methods they do not use. Fat interfaces with many methods create coupling and make classes implement empty or throwing methods.

## 📋 Concrete Example

Instead of one `Machine` interface with `print()`, `scan()`, and `fax()`, split into `Printer`, `Scanner`, and `Fax` interfaces. A simple printer only implements `Printer`.

## 🔗 Analogy

A restaurant menu with 200 items means the chef must prepare all of them, even if most customers order only five. A small focused menu keeps quality high and waste low.

## Related Concepts

- [[solid|SOLID]]
- [[abstraction|Abstraction]]
- [[separation-of-concerns|Separation of Concerns]]
