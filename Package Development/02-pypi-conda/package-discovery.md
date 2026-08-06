---
tags: [PyPI-Conda]
domain: PyPI & Conda
---

# package-discovery

> **Domain:** [[_pypi-conda-moc|PyPI & Conda]]

## 🎯 Motivation

How build tools find which directories to include in a distribution. Setuptools uses `find:` or `find_namespace:`.

## 📋 Concrete Example

In `pyproject.toml`, set `[tool.setuptools.packages.find]` with `where = ["src"]` to auto-discover packages.

## 🔗 Analogy

Package discovery is a metal detector — the tool scans your project and beeps when it finds importable code.

## Related Concepts

- [[package-structure|package-structure]]
- [[setuptools|setuptools]]
- [[pyproject-toml|pyproject.toml]]
