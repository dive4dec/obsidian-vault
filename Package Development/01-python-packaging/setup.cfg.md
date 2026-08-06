---
tags: [Python-Packaging]
domain: Python Packaging
---

# setup.cfg

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

A static configuration file that supplements or replaces `setup.py`. It keeps metadata declarative so you don't need code to describe your package.

## 📋 Concrete Example

A `setup.cfg` `[metadata]` section holds `name = mypkg` and `version = 1.0`, while `[options]` lists `packages = find:`.

## 🔗 Analogy

`setup.cfg` is like a form you fill in at the doctor's office — structured fields instead of freehand writing.

## Related Concepts

- [[setup-py|setup.py]]
- [[pyproject-toml|pyproject.toml]]
- [[metadata|metadata]]
