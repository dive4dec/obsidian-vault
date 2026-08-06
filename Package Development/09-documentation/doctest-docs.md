---
tags: [Documentation]
domain: Documentation
---

# doctest docs

> **Domain:** [[_documentation-moc|Documentation]]

## 🎯 Motivation

`doctest-docs` integrates `doctest` examples from your docstrings into the documentation build, ensuring code examples in docs are always tested and correct. It prevents the common problem of docs showing outdated, broken examples.

## 📋 Concrete Example

You enable `doctest` in `sphinx` `conf.py`, and every `>>>` example in your docstrings is executed during `make doctest`, failing the build if an example produces wrong output.

## 🔗 Analogy

`doctest-docs` is like a spellchecker that also verifies every phone number in your document actually connects. If a number is dead (code is broken), it flags it before publishing.

## Related Concepts

- [[doctest|doctest]]
- [[sphinx|sphinx]]
- [[autodoc|autodoc]]
