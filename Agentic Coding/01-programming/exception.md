---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Exception

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

When something goes wrong in Python, it raises an exception - a special error object with a type and message.

## 📋 Concrete Example

`ValueError`, `TypeError`, `KeyError` are common exceptions. `int('abc')` raises `ValueError: invalid literal for int()`.

## 🔗 Analogy

A fire alarm - when something goes wrong, the alarm (exception) sounds. If nobody handles it (no try/except), the building evacuates (program crashes).

## Related Concepts

- [[error-handling|Error Handling]]
- [[try-except|Try-Except]]
- [[stack-trace|Stack Trace]]
