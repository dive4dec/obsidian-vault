---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# ABI Wheels

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

ABI (Application Binary Interface) tags on wheels indicate Python's internal C-level compatibility. Understanding ABI tags like `cp311` ensures your wheel matches the user's Python interpreter.

## 📋 Concrete Example

A wheel named `mypkg-cp311-...whl` works with CPython 3.11's ABI. It will not load on Python 3.10 because the internal C structures differ, even though both are "Python 3."

## 🔗 Analogy

Plugs and sockets have shapes (types) that must match physically. Two round-pin plugs look similar, but if the pin spacing differs, they do not fit. ABI is that pin spacing for Python's C layer.

## Related Concepts

- [[platform-wheels|Platform Wheels]]
- [[manylinux|manylinux]]
- [[musllinux|musllinux]]
