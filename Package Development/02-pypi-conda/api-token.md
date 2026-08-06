---
tags: [PyPI-Conda]
domain: PyPI & Conda
---

# api-token

> **Domain:** [[_pypi-conda-moc|PyPI & Conda]]

## 🎯 Motivation

A scoped secret string used to authenticate PyPI uploads instead of a password. Created in your PyPI account settings.

## 📋 Concrete Example

Generate a token with scope `Entire account` or per-project, then use it as the password in `twine upload`.

## 🔗 Analogy

An API token is a hotel key card — it opens specific doors and you can deactivate it if lost.

## Related Concepts

- [[pypi-account|pypi-account]]
- [[twine|twine]]
- [[pypi-upload|pypi-upload]]
