---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# observe-callback

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

A method triggered when a widget's trait changes. Register it with `widget.observe(handler, names='value')`.

## 📋 Concrete Example

Call `slider.observe(on_change, names='value')` so `on_change(change)` fires whenever the slider moves.

## 🔗 Analogy

An observe callback is a motion sensor light — when the widget value moves, your function turns on.

## Related Concepts

- [[ipywidget|ipywidget]]
- [[interact-decorator|interact-decorator]]
- [[jupyter-widget|jupyter-widget]]
