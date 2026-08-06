---
tags: [Pure-Python-Packages]
domain: Pure Python Packages
---

# zipimport

> **Domain:** [[_pure-python-packages-moc|Pure Python Packages]]

## 🎯 Motivation

Python's built-in module that lets it import `.py` files directly from zip archives. This powers `sys.path` entries pointing at `.zip` files.

## 📋 Concrete Example

Adding a `.zip` to `PYTHONPATH` lets `import mypkg` work because `zipimport` reads the archive.

## 🔗 Analogy

zipimport is a vending machine that reads barcodes inside a sealed box — no need to unpack to use.

## Related Concepts

- [[zip-safe|zip-safe]]
- [[frozen-packages|frozen-packages]]
- [[pure-python|pure-python]]
