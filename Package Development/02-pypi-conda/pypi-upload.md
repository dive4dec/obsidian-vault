---
tags: [PyPI-Conda]
domain: PyPI & Conda
---

# pypi-upload

> **Domain:** [[_pypi-conda-moc|PyPI & Conda]]

## 🎯 Motivation

The process of publishing a package to PyPI using `twine`. You must have an account and a built distribution in `dist/`.

## 📋 Concrete Example

Steps: `python -m build` → `twine upload dist/*` → enter username and token → package appears on PyPI.

## 🔗 Analogy

Uploading to PyPI is mailing a letter — you seal the envelope (build), stamp it (twine), and send it off.

## Related Concepts

- [[twine|twine]]
- [[pypi|pypi]]
- [[testpypi|TestPyPI]]
