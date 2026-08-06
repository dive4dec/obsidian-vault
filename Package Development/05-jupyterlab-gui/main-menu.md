---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# main-menu

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

The top menu bar in JupyterLab (File, Edit, View, Run, etc.). Extensions add items via `app.commands` and `MainMenu`.

## 📋 Concrete Example

Use `mainMenu.fileMenu.addGroup([{command: 'mycmd'}])` to insert your command into the File menu.

## 🔗 Analogy

The main menu is a restaurant menu — each section lists dishes (commands) you can order by clicking.

## Related Concepts

- [[command-registry|command-registry]]
- [[context-menu|context-menu]]
- [[command-palette|command-palette]]
