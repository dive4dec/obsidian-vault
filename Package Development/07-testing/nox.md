---
tags: [Testing-Quality]
domain: Testing Quality
---

# nox

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`nox` is a modern alternative to `tox` that uses Python files instead of INI config. It is more flexible and readable for developers who prefer code over configuration.

## 📋 Concrete Example

You write a `noxfile.py` with a session function `@nox.session(python=["3.10", "3.11"])` that installs and tests your package, then run `nox` to execute it.

## 🔗 Analogy

If `tox` is a recipe written on an index card, `nox` is the same recipe written as a Python script you can debug, loop over, and extend with logic.

## Related Concepts

- [[tox|tox]]
- [[pytest|pytest]]
- [[matrix-testing|matrix testing]]
