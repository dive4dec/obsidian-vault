---
tags: [Python-Packaging]
domain: Python Packaging
---

# dependencies

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

The external packages your project needs to run. Declared in `[project]` under `dependencies`, they are installed automatically by pip.

## 📋 Concrete Example

Write `dependencies = ["requests>=2.28", "numpy"]` so pip pulls them in during `pip install mypkg`.

## 🔗 Analogy

Dependencies are ingredients a recipe needs — without flour and eggs you can't bake the cake.

## Related Concepts

- [[optional-dependencies|optional-dependencies]]
- [[pyproject-toml|pyproject.toml]]
- [[metadata|metadata]]
