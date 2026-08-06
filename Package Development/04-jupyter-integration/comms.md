---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# comms

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The communication channel between frontend widgets and the kernel. Messages flow both ways through a `Comm` object.

## 📋 Concrete Example

A widget creates a `Comm` target; the frontend opens it and sends/receives JSON messages synchronously.

## 🔗 Analogy

Comms are a two-way radio — the frontend and kernel talk back and forth to stay in sync.

## Related Concepts

- [[jupyter-widget|jupyter-widget]]
- [[ipywidget|ipywidget]]
- [[display-publishing|display-publishing]]
