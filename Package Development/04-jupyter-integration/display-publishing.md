---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# display-publishing

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The mechanism by which `IPython.display.display()` sends output to the frontend. It publishes MIME bundles for rich rendering.

## 📋 Concrete Example

Calling `display(obj)` publishes the object's HTML, text, and PNG representations to the cell output area.

## 🔗 Analogy

Display publishing is a bulletin board — you pin your output and everyone in the notebook can see it.

## Related Concepts

- [[rich-display|rich-display]]
- [[mime-bundle|mime-bundle]]
- [[comms|comms]]
