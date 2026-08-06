---
tags: [Refactoring]
domain: Refactoring
---

# Replace Conditional with Polymorphism

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Long `if-elif` chains that switch on type are fragile — adding a new type means editing every chain. Polymorphism moves each branch into its own subclass, so new types just add a class.

## 📋 Concrete Example

Instead of `if bird.type == "eagle": return speed * 3` / `elif "sparrow": return speed * 1`, give each subclass a `fly_speed()` method. Adding `Penguin` just means a new class.

## 🔗 Analogy

A toll booth with a price chart per vehicle type is fine until you add electric cars. A smart transponder that reports its own toll rate means the booth never needs a chart update.

## Related Concepts

- [[polymorphism|Polymorphism]]
- [[open-closed|Open-Closed]]
- [[code-smell|Code Smell]]
