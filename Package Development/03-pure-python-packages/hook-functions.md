---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# hook-functions

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

Functions that the host package calls at specific lifecycle events. Plugins define hooks to inject behavior.

## 📋 Concrete Example

A plugin exposes `def on_load(app): app.register_feature()` which the host calls during startup.

## 🔗 Analogy

Hook functions are alarm clock triggers — they fire at set times so your code runs exactly when needed.

## Related Concepts

- [[plugin-architecture|plugin-architecture]]
- [[registry-pattern|registry-pattern]]
- [[entry-points|entry-points]]
