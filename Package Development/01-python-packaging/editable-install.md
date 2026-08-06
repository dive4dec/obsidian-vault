---
tags: [Python-Packaging]
domain: Python Packaging
---

# editable-install

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

Installing a package so changes to source are immediately visible without reinstall. Done with `pip install -e .`.

## 📋 Concrete Example

Running `pip install -e .` links the source dir so editing `mypkg/core.py` takes effect instantly.

## 🔗 Analogy

An editable install is a live wire — your edits flow straight into the running program, no replug needed.

## Related Concepts

- [[pip-install|pip install]]
- [[src-layout|src-layout]]
- [[egg-info|egg-info]]
