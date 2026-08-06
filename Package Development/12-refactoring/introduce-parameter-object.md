---
tags: [Refactoring]
domain: Refactoring
---

# Introduce Parameter Object

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Functions with many related parameters are error-prone and hard to read. Grouping them into an object clarifies intent, reduces argument count, and makes future additions easier.

## 📋 Concrete Example

`create_order(customer, item, qty, price, address, coupon)` becomes `create_order(OrderRequest)` where `OrderRequest` bundles the fields. Callers build one clear object instead of six positional args.

## 🔗 Analogy

Handing a librarian a single "book request form" is easier than shouting six separate details. The form groups everything they need, so nothing gets lost or misordered.

## Related Concepts

- [[extract-function|Extract Function]]
- [[encapsulation|Encapsulation]]
- [[single-responsibility|Single Responsibility]]
