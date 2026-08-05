---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Duck Typing

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Python doesn't check types strictly - if an object walks like a duck and quacks like a duck, it's a duck.

## 📋 Concrete Example

`def quack(thing): thing.quack()` - any object with a `.quack()` method works, whether it's a Duck, a Toy, or a Person imitating a duck.

## 🔗 Analogy

Judging by behaviour, not identity - if someone can swim and quack convincingly, you treat them as a duck. You don't check their DNA.

## Related Concepts

- [[type-checking|Type Checking]]
- [[polymorphism|Polymorphism]]
- [[interface|Interface]]
