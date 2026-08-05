---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Encapsulation

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Hiding internal details and only exposing a clean interface prevents other code from accidentally breaking things.

## 📋 Concrete Example

A `BankAccount` class hides its `balance` variable. You can only change it through `deposit()` and `withdraw()` methods that check rules.

## 🔗 Analogy

A car's engine - you don't directly control the spark plugs. You press the gas pedal (interface), and the engine's internals (encapsulated details) handle the rest.

## Related Concepts

- [[class|Class]]
- [[private-attribute|Private Attribute]]
- [[interface|Interface]]
