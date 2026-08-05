---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Context Manager

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Managing resources (files, connections) safely is error-prone. Context managers (the `with` statement) handle setup and cleanup automatically.

## 📋 Concrete Example

`with open('data.txt') as f: data = f.read()` - the file is automatically closed when the block ends, even if an error occurred.

## 🔗 Analogy

A self-cleaning paint roller - when you're done painting (exit the `with` block), it automatically cleans itself. You don't have to remember to clean up.

## Related Concepts

- [[file-i-o|File I-O]]
- [[finally|Finally]]
- [[resource-management|Resource Management]]
