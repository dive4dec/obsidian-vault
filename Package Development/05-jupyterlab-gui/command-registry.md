---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# command-registry

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A central store in JupyterLab that maps command IDs to execute functions and labels. Commands power menus, palettes, and shortcuts.

## 📋 Concrete Example

Register with `app.commands.addCommand('mycmd', {execute: () => {...}, label: 'My Command'})`.

## 🔗 Analogy

The command registry is a phonebook of actions — each command has an ID and number (function) to call.

## Related Concepts

- [[command-palette|command-palette]]
- [[main-menu|main-menu]]
- [[context-menu|context-menu]]
