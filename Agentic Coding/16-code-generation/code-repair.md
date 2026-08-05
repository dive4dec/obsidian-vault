---
tags: [Code-Generation]
domain: Code Generation
---

# Code Repair

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

When code has bugs, the model can analyze the error and generate a fix. Like having a debugging partner.

## 📋 Concrete Example

Broken code: 'def add(a, b) return a + b' (missing colon). Model: 'Missing colon after the function definition. Fixed: def add(a, b): return a + b'

## 🔗 Analogy

A mechanic diagnosing a car - they hear the engine sputter, identify the problem (bad spark plug), and fix it. Code repair is the model diagnosing and fixing code bugs.

## Related Concepts

- [[code-generation|Code Generation]]
- [[error-handling|Error Handling]]
- [[debugging|Debugging]]
