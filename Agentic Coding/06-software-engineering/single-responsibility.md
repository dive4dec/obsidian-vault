---
tags: [Software-Engineering]
domain: Software Engineering
---

# Single Responsibility

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Each module/class/function should do one thing. Easier to understand, test, and maintain.

## 📋 Concrete Example

Good: calculate_tax() only calculates tax. format_receipt() only formats. send_email() only sends. Each does one thing. Bad: process_order() calculates tax, formats receipt, sends email, and updates inventory. Too many responsibilities.

## 🔗 Analogy

Single responsibility is like a factory assembly line - each station does one thing: put on the wheels, paint the body, install the seats. Focused, efficient, replaceable. One thing per station (module).

## Related Concepts

- [[cohesion|Cohesion]]
- [[modular-design|Modular Design]]
- [[separation-of-concerns|Separation of Concerns]]
