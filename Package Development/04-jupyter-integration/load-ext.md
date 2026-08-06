---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# load-ext

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The `%load_ext` magic that loads an IPython extension by module path. The extension's `load_ipython_extension()` function runs on load.

## 📋 Concrete Example

Typing `%load_ext autoreload` activates the auto-reload extension so edited modules update in the kernel.

## 🔗 Analogy

`%load_ext` is flipping a light switch — the extension module powers on and its features light up.

## Related Concepts

- [[ipython-extensions|ipython-extensions]]
- [[register-magic|register-magic]]
- [[jupyter-magic|jupyter-magic]]
