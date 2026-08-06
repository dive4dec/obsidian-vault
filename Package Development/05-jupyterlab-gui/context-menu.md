---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# context-menu

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

The right-click menu in JupyterLab. Extensions register context menu items that appear based on the clicked widget's selector.

## 📋 Concrete Example

Add `app.contextMenu.addItem({command: 'mycmd', selector: '.jp-Cell'})` to show your command on cell right-click.

## 🔗 Analogy

A context menu is a pop-up helper — right-click and it offers actions relevant to what you clicked.

## Related Concepts

- [[command-registry|command-registry]]
- [[main-menu|main-menu]]
- [[jupyterlab-ui|jupyterlab-ui]]
