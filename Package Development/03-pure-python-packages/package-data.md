---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# package-data

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A declarative way to specify which non-Python files to include per package. Listed in `[tool.setuptools.package-data]`.

## 📋 Concrete Example

Write `package-data = {mypkg = ["*.json", "templates/*.html"]}` to bundle specific file types.

## 🔗 Analogy

package-data is a packing checklist — you tick exactly which items go into each box.

## Related Concepts

- [[include-package-data|include-package-data]]
- [[data-files|data-files]]
- [[MANIFEST-in|MANIFEST.in]]
