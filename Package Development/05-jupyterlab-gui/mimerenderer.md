---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# mimerenderer

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A JupyterLab extension that renders a specific MIME type in the frontend. For example, a JSON renderer or a LaTeX renderer.

## 📋 Concrete Example

Register a `IRendererFactory` for `mimeTypes: ['application/json']` to customise how JSON output looks.

## 🔗 Analogy

A MIME renderer is a translator for the frontend — it turns raw data of a type into something visual.

## Related Concepts

- [[mime-bundle|mime-bundle]]
- [[rich-display|rich-display]]
- [[lab-extension|lab-extension]]
