---
tags: [Python-Packaging]
domain: Python Packaging
---

# build-system

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

The `[build-system]` table in `pyproject.toml` tells pip which backend to use to create distributions. It decouples build tools from installers.

## 📋 Concrete Example

You declare `requires = ["setuptools>=61"]` and `build-backend = "setuptools.build_meta"` under `[build-system]`.

## 🔗 Analogy

The build-system is like choosing a contractor — you name who builds your house and what tools they need.

## Related Concepts

- [[pyproject-toml|pyproject.toml]]
- [[setuptools|setuptools]]
- [[hatch|hatch]]
