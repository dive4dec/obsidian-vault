---
tags: [Python-Packaging]
domain: Python Packaging
---

# pyproject.toml

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

The modern standard config file defined in PEP 518/621. It declares the build system, project metadata, and dependencies in one place.

## 📋 Concrete Example

Under `[project]` you write `name = "mypkg"` and `dependencies = ["requests"]`, plus `[build-system]` with `requires = ["setuptools"]`.

## 🔗 Analogy

`pyproject.toml` is the single control panel for your project — one dashboard replaces several scattered remotes.

## Related Concepts

- [[setup-py|setup.py]]
- [[build-system|build-system]]
- [[metadata|metadata]]
