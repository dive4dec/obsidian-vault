---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# include-package-data

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A setuptools option that auto-includes files tracked by version control into the wheel. It pairs with `MANIFEST.in`.

## 📋 Concrete Example

Set `include-package-data = true` in `[tool.setuptools]` so files in git get bundled into the wheel.

## 🔗 Analogy

include-package-data is an auto-pack button — everything in your project folder gets boxed for shipping.

## Related Concepts

- [[package-data|package-data]]
- [[MANIFEST-in|MANIFEST.in]]
- [[data-files|data-files]]
