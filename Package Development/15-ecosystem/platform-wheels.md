---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Platform Wheels

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

Wheels are pre-built binary packages that install fast without compiling. Platform wheels are built for specific operating systems and architectures, so users get the right binary automatically.

## 📋 Concrete Example

A package ships `mypkg-1.0-cp311-manylinux2014_x86_64.whl` for Linux and `mypkg-1.0-cp311-win_amd64.whl` for Windows. `pip install mypkg` detects your platform and downloads the matching wheel.

## 🔗 Analogy

Shoe sizes: a store stocks size 7, 8, and 9. You walk in, and the clerk hands you your size. You never have to cobble a shoe from raw leather — the right size is ready to wear.

## Related Concepts

- [[abi-wheels|ABI Wheels]]
- [[manylinux|manylinux]]
- [[musllinux|musllinux]]
