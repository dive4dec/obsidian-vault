---
tags: [PyPI-Conda]
domain: PyPI & Conda
---

# TestPyPI

> **Domain:** [[_pypi-conda-moc|PyPI & Conda]]

## 🎯 Motivation

A separate instance of PyPI for testing uploads. It lets you practise publishing without polluting the real index.

## 📋 Concrete Example

Use `twine upload --repository testpypi dist/*` to push to `test.pypi.org` before the real release.

## 🔗 Analogy

TestPyPI is a dress rehearsal stage — you perform the full upload routine without the live audience.

## Related Concepts

- [[pypi|pypi]]
- [[twine|twine]]
- [[pypi-upload|pypi-upload]]
