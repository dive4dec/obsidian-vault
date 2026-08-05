---
tags: [Software-Engineering]
domain: Software Engineering
---

# Coupling

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

How much modules depend on each other. Low coupling = modules are independent. Good.

## 📋 Concrete Example

Low coupling: auth.py and data.py communicate through a clear interface. Change data.py's internals without affecting auth.py. High coupling: auth.py directly accesses data.py's variables. Change one, break the other. Low coupling is better.

## 🔗 Analogy

Coupling is like the links in a chain - if each link is independent (low coupling), you can replace one without affecting others. If they are welded together (high coupling), you must replace the whole chain. Low coupling is more maintainable.

## Related Concepts

- [[modular-design|Modular Design]]
- [[cohesion|Cohesion]]
- [[separation-of-concerns|Separation of Concerns]]
