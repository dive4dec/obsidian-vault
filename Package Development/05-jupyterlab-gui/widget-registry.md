---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# widget-registry

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A JupyterLab token-based registry where extensions register widgets, renderers, and factories. Uses `@lumino/coreutils.Token` for type-safe lookup.

## 📋 Concrete Example

Define `const IMyWidget = new Token<IMyWidget>('mywidget')` and register with `app.registerPlugin({token, provides})`.

## 🔗 Analogy

The widget registry is a sign-up board — extensions register their widgets under a token so others can find them.

## Related Concepts

- [[lab-extension|lab-extension]]
- [[lumino-widgets|lumino-widgets]]
- [[settings-registry|settings-registry]]
