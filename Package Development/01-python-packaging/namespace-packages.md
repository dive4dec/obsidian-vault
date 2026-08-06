---
tags: [Python-Packaging]
domain: Python Packaging
---

# namespace-packages

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

Packages that span multiple directories or distributions, letting different packages share one top-level import name.

## 📋 Concrete Example

Two projects can both contribute to `myorg.tools` by omitting `__init__.py` and using `find_namespace:`.

## 🔗 Analogy

Namespace packages are a shared brand — multiple shops sell under one logo but each owns its products.

## Related Concepts

- [[package-structure|package-structure]]
- [[namespace-pkg-util|namespace pkg_util]]
- [[setuptools|setuptools]]
