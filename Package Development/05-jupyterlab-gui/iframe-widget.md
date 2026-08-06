---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# iframe-widget

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A Lumino widget wrapping an HTML `<iframe>` to embed external web content inside JupyterLab's panel system.

## 📋 Concrete Example

Create `const iframe = new IFrame(); iframe.url = 'https://example.com';` and add it to the main dock panel.

## 🔗 Analogy

An iframe widget is a picture-in-picture window — external web content lives inside a JupyterLab tab.

## Related Concepts

- [[lumino-widgets|lumino-widgets]]
- [[jupyterlab-ui|jupyterlab-ui]]
- [[lab-extension|lab-extension]]
