---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Polymorphism

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Different classes can have methods with the same name, and code can call them without knowing which class it is.

## 📋 Concrete Example

`for animal in [Dog(), Cat(), Duck()]: animal.speak()` - each speaks differently (woof, meow, quack) but the code is the same.

## 🔗 Analogy

A universal remote control - the `play` button works on a TV, a stereo, and a DVD player, even though each does something different internally.

## Related Concepts

- [[duck-typing|Duck Typing]]
- [[inheritance|Inheritance]]
- [[method-overriding|Method Overriding]]
