---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Conda Ecosystem

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Conda is a package manager popular in data science because it handles non-Python dependencies (like C libraries) and isolated environments. Knowing when to choose Conda over pip matters.

## 📋 Concrete Example

`conda install numpy` installs `numpy` plus its optimized BLAS library in one step. With pip, you might need to compile BLAS separately. Conda bundles binary dependencies for you.

## 🔗 Analogy

A meal kit delivery service gives you ingredients plus the recipe. A grocery store (pip) gives you ingredients, but you must find recipes and some tools yourself. Each suits different cooks.

## Related Concepts

- [[pypi-ecosystem|PyPI Ecosystem]]
- [[platform-wheels|Platform Wheels]]
- [[dependency-resolution|Dependency Resolution]]
