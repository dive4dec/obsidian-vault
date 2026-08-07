---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# registry-pattern

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A central dictionary where plugins register themselves. The host looks up registered items by key to use them.

## 📋 Concrete Example

A global `REGISTRY = {}` where plugins call `REGISTRY['myfeature'] = MyClass` to make features available.

## 🔗 Analogy

The registry pattern is a sign-up sheet — plugins write their name, and the host reads the list to call them.

## Related Concepts

- [[plugin-architecture|plugin-architecture]]
- [[hook-functions|hook-functions]]
- [[entry-points|entry-points]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[jupyter-ai-persona-manager|jupyter-ai-persona-manager]]
