---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# zip-safe

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

A flag indicating a package can run directly from inside a `.zip` without being extracted to disk. Rarely used today but historically important.

## 📋 Concrete Example

Set `zip_safe = False` in setup config if your package reads files with `__file__` paths at runtime.

## 🔗 Analogy

zip-safe is a waterproof container — if marked safe, your gear works even when packed tight and wet.

## Related Concepts

- [[zipimport|zipimport]]
- [[pure-python|pure-python]]
- [[wheel|wheel]]
