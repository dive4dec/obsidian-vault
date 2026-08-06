---
tags: [Python-Packaging]
domain: Python Packaging
---

# wheel

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

A pre-built binary distribution format (`.whl`) that installs fast because it skips the build step. Wheels are the default package type on PyPI.

## 📋 Concrete Example

Running `python -m build --wheel` produces `mypkg-1.0-py3-none-any.whl`, which `pip install` can use directly.

## 🔗 Analogy

A wheel is like a microwave dinner — pre-cooked so you just heat and eat, no raw prep needed.

## Related Concepts

- [[sdist|sdist]]
- [[build-system|build-system]]
- [[pip-install|pip install]]
