---
tags: [Design-Principles]
domain: Design Principles
---

# Law of Demeter

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

An object should only talk to its immediate friends, not strangers. Chaining calls like `order.customer.address.city` creates tight coupling and fragile code.

## 📋 Concrete Example

Instead of `order.get_customer().get_address().get_city()`, ask the order directly: `order.get_shipping_city()`. The order hides how it computes the city internally.

## 🔗 Analogy

You ask a friend for a ride home, not for their car keys, engine diagram, and a map. You trust the friend to handle the details and just deliver you.

## Related Concepts

- [[encapsulation|Encapsulation]]
- [[coupling-cohesion|Coupling and Cohesion]]
- [[tell-dont-ask|Tell Don't Ask]]
