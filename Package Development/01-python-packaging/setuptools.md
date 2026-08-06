---
tags: [Python-Packaging]
domain: Python Packaging
---

# setuptools

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

The most widely used build backend. It evolved from `distutils` and handles package discovery, metadata, and building wheels/sdists.

## 📋 Concrete Example

Add `requires = ["setuptools"]` to `[build-system]`, then `setuptools` finds your packages with `find:` or `find_namespace:`.

## 🔗 Analogy

setuptools is the Swiss Army knife of packaging — old, bulky, but it has a tool for nearly every job.

## Related Concepts

- [[build-system|build-system]]
- [[pyproject-toml|pyproject.toml]]
- [[entry-points|entry-points]]
