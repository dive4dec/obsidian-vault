---
tags: [Python-Packaging]
domain: Python Packaging
---

# src-layout

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

Placing your package inside a `src/` directory so the installed version is used, not the local source. This catches packaging bugs early.

## 📋 Concrete Example

Layout: `src/mypkg/__init__.py` with `pyproject.toml` at root; tests import `mypkg` only after install.

## 🔗 Analogy

src-layout is a sealed product tester — you evaluate the packaged item, not the loose parts on your bench.

## Related Concepts

- [[flat-layout|flat-layout]]
- [[package-structure|package-structure]]
- [[editable-install|editable install]]
