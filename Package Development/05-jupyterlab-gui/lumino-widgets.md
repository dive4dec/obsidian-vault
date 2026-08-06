---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# lumino-widgets

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

The widget toolkit library (formerly PhosphorJS) that JupyterLab uses for its panel, tab, and layout system. Pure TypeScript.

## 📋 Concrete Example

Import `Widget` from `@lumino/widgets`, create `new Widget({node: el})`, and add it to the main dock panel.

## 🔗 Analogy

Lumino widgets are building bricks — each is a rectangular panel you stack, tab, or split in the layout.

## Related Concepts

- [[jupyterlab-ui|jupyterlab-ui]]
- [[phosphor|phosphor]]
- [[widget-registry|widget-registry]]
