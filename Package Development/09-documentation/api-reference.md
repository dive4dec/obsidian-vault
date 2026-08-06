---
tags: [Documentation]
domain: Documentation
---

# api reference

> **Domain:** [[_documentation-moc|Documentation]]

## 🎯 Motivation

An `api reference` is auto-generated documentation listing every class, method, and function with their signatures and docstrings. It is the "dictionary" of your package that users consult to understand available tools.

## 📋 Concrete Example

`sphinx-apidoc -o docs/ mypackage/` generates `.rst` files for every module, and `autodoc` fills them with docstrings, producing a complete browsable API reference.

## 🔗 Analogy

An `api reference` is like a dictionary of every word (function) in a language. You look up a word to see its meaning (docstring) and usage (signature).

## Related Concepts

- [[autodoc|autodoc]]
- [[sphinx|sphinx]]
- [[docstring-formats|docstring formats]]
