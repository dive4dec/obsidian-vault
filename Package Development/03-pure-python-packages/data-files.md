---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# data-files

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

Non-Python files bundled with a package, like JSON configs, CSV data, or images. They must be declared so the build includes them.

## 📋 Concrete Example

Use `package-data` in `pyproject.toml` to include `data/*.json` files alongside your Python modules.

## 🔗 Analogy

Data files are the props in a play — the actors (code) need them on stage to perform the scene.

## Related Concepts

- [[include-package-data|include-package-data]]
- [[package-data|package-data]]
- [[MANIFEST-in|MANIFEST.in]]
