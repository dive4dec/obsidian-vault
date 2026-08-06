---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# mime-bundle

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

A dictionary mapping MIME types to data that Jupyter uses to render output. The frontend picks the richest format it supports.

## 📋 Concrete Example

An object returns `{'text/html': '<b>Hi</b>', 'text/plain': 'Hi'}` — Jupyter shows HTML, falling back to text.

## 🔗 Analogy

A MIME bundle is a multilingual document — the same content in several languages; the reader picks one.

## Related Concepts

- [[rich-display|rich-display]]
- [[display-publishing|display-publishing]]
- [[mimerenderer|mimerenderer]]
