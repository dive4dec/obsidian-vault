---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# type-stubs-pyi

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

Files with `.pyi` extension that declare type signatures for modules. Used by mypy and IDEs for static analysis.

## 📋 Concrete Example

A `requests.pyi` file declares `def get(url: str) -> Response: ...` so mypy can check your code.

## 🔗 Analogy

Type stubs are blueprints — they show the structure and measurements without the actual building.

## Related Concepts

- [[stub-packages|stub-packages]]
- [[pure-python|pure-python]]
- [[frozen-packages|frozen-packages]]
