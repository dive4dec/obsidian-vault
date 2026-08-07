---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# rich-display

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

Python objects can define `_repr_html_()`, `_repr_png_()`, etc. so Jupyter shows them as rich content instead of plain text.

## 📋 Concrete Example

A class with `def _repr_html_(self): return '<b>Hello</b>'` renders as bold text in the notebook.

## 🔗 Analogy

Rich display is a picture frame — your object chooses how to present itself, not just as a text string.

## Related Concepts

- [[display-publishing|display-publishing]]
- [[mime-bundle|mime-bundle]]
- [[jupyter-widget|jupyter-widget]]
- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[jupyter-python-tutor|jupyter-python-tutor]]
