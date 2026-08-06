---
tags: [Python-Packaging]
domain: Python Packaging
---

# egg-info

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

A metadata directory created by setuptools during install. It records the package name, version, and entry points for the installer.

## 📋 Concrete Example

After `pip install -e .` you see `mypkg.egg-info/` containing `PKG-INFO`, `entry_points.txt`, and `SOURCES.txt`.

## 🔗 Analogy

egg-info is a packing slip tucked inside the box — it lists contents so the receiver knows what arrived.

## Related Concepts

- [[editable-install|editable install]]
- [[setuptools|setuptools]]
- [[metadata|metadata]]
