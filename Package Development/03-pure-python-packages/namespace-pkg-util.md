---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# namespace-pkg-util

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

The older `pkgutil`-style namespace packages, declared with `__path__ = __import__('pkgutil').extend_path(__path__, __name__)`.

## 📋 Concrete Example

Putting that line in `__init__.py` lets multiple distributions contribute to one namespace package.

## 🔗 Analogy

pkgutil namespaces are a shared mailbox — multiple tenants receive mail under one address.

## Related Concepts

- [[namespace-packages|namespace-packages]]
- [[package-structure|package-structure]]
- [[pure-python|pure-python]]
