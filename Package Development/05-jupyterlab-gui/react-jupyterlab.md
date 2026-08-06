---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# react-jupyterlab

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

Using React components inside JupyterLab extensions. A wrapper bridges React's virtual DOM with Lumino's widget tree.

## 📋 Concrete Example

Wrap a React component with `ReactWidget.create(<MyComponent />)` and add it as a Lumino widget.

## 🔗 Analogy

React in JupyterLab is fitting a modern engine into a classic car chassis — a bridge adapter makes them compatible.

## Related Concepts

- [[typescript|typescript]]
- [[lab-extension|lab-extension]]
- [[lumino-widgets|lumino-widgets]]
