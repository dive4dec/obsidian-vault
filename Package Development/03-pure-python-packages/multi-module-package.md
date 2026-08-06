---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# multi-module-package

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A package with multiple `.py` files in a directory with `__init__.py`. This is the standard Python package layout.

## 📋 Concrete Example

Structure `mypkg/__init__.py`, `mypkg/api.py`, `mypkg/utils.py` lets users do `from mypkg import api`.

## 🔗 Analogy

A multi-module package is a toolkit — each module is a different tool, all in one box.

## Related Concepts

- [[single-module-package|single-module-package]]
- [[package-structure|package-structure]]
- [[plugin-architecture|plugin-architecture]]
