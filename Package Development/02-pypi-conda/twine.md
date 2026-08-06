---
tags: [PyPI-Conda]
domain: PyPI & Conda
---

# twine

> **Domain:** [[_pypi-conda-moc|PyPI & Conda]]

## 🎯 Motivation

The recommended tool for uploading packages to PyPI. It uses HTTPS authentication and is safer than the old `python setup.py upload`.

## 📋 Concrete Example

Build with `python -m build`, then `twine upload dist/*` to publish both wheel and sdist.

## 🔗 Analogy

Twine is a courier service — it securely carries your packaged goods to the PyPI warehouse.

## Related Concepts

- [[pypi-upload|pypi-upload]]
- [[pypi|pypi]]
- [[testpypi|TestPyPI]]
