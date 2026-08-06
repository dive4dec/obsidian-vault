---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# interact-decorator

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The `@interact` decorator from `ipywidgets` that auto-generates widget controls from a function's arguments.

## 📋 Concrete Example

Decorate `@interact(x=(0,10))` `def f(x): print(x)` and a slider appears, calling `f` on every change.

## 🔗 Analogy

`@interact` is an automatic remote builder — describe the function and it wires up the controls for you.

## Related Concepts

- [[ipywidget|ipywidget]]
- [[jupyter-widget|jupyter-widget]]
- [[observe-callback|observe-callback]]
