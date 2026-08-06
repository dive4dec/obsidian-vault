---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# plugin-architecture

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A design where third-party code extends your package via entry points or hooks. The core loads plugins dynamically at runtime.

## 📋 Concrete Example

Register `myplugin = "ext_pkg.plugin:setup"` as an entry point; the host calls `setup()` to activate it.

## 🔗 Analogy

Plugin architecture is a wall of electrical sockets — you plug in any device and it just works.

## Related Concepts

- [[entry-points|entry-points]]
- [[hook-functions|hook-functions]]
- [[registry-pattern|registry-pattern]]
