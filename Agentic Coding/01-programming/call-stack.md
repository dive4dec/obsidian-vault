---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Call Stack

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Every function call adds a frame to the call stack. When functions return, frames are removed. Too many = overflow.

## 📋 Concrete Example

Calling `f()` which calls `g()` which calls `h()` - the stack is [f, g, h]. When h returns, it's [f, g]. When g returns, it's [f].

## 🔗 Analogy

A stack of plates - you add a plate on top (call) and remove from the top (return). Last plate on is the first off. Too many plates = the stack falls over (overflow).

## Related Concepts

- [[recursion|Recursion]]
- [[stack-overflow|Stack Overflow]]
- [[function-call|Function Call]]
