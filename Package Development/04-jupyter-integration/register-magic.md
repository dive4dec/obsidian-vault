---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# register-magic

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The process of defining a new magic function using `@register_line_magic` or `@register_cell_magic` decorators from IPython.

## 📋 Concrete Example

Decorate a function: `@register_line_magic("greet")` `def greet(line): print(f"Hi {line}")` then call `%greet Ada`.

## 🔗 Analogy

Registering a magic is creating a new shortcut key — you define what it does once, then use it by name.

## Related Concepts

- [[ipython-extensions|ipython-extensions]]
- [[load-ext|load-ext]]
- [[jupyter-magic|jupyter-magic]]
