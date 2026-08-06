---
tags: [Documentation]
domain: Documentation
---

# autodoc

> **Domain:** [[_documentation-moc|Documentation]]

## 🎯 Motivation

`autodoc` is a `sphinx` extension that reads your code's docstrings and generates API docs automatically. It eliminates the need to manually rewrite function signatures and descriptions in separate documentation files.

## 📋 Concrete Example

You add `automodule:: mypackage.models` to an `.rst` file, and `sphinx` pulls every class and method docstring from `models.py` into the generated docs automatically.

## 🔗 Analogy

`autodoc` is like a smart copier that reads your handwritten notes and typesets them into a finished report, without you retyping a single word.

## Related Concepts

- [[sphinx|sphinx]]
- [[docstring-formats|docstring formats]]
- [[api-reference|api reference]]
