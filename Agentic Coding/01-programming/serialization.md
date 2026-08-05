---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Serialization

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Objects in memory are complex. Serialization converts them to a simple format (text/bytes) for saving or sending.

## 📋 Concrete Example

`import json; json.dumps({'a': 1})` produces the string `'{"a": 1}'` - the dict is now text that can be saved to a file or sent over a network.

## 🔗 Analogy

Vacuum-packing clothes for travel - you compress your clothes (objects) into flat packages (serialized) so they fit in a suitcase (file/network). At your destination, you unpack them (deserialize).

## Related Concepts

- [[json|JSON]]
- [[deserialization|Deserialization]]
- [[file-i-o|File I-O]]
