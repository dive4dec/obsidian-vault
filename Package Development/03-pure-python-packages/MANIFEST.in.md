---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# MANIFEST.in

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A file that tells setuptools which extra files to include in the sdist. It uses `include`, `recursive-include`, and `graft` commands.

## 📋 Concrete Example

A `MANIFEST.in` line `recursive-include mypkg *.json` pulls all JSON files into the source distribution.

## 🔗 Analogy

MANIFEST.in is a shipping manifest — it lists every extra item the cargo ship must carry.

## Related Concepts

- [[include-package-data|include-package-data]]
- [[sdist|sdist]]
- [[data-files|data-files]]
