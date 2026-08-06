---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# jupyterlab-cell-toolbar

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A customizable toolbar above each notebook cell in JupyterLab. Extensions add buttons via the cell toolbar registry.

## 📋 Concrete Example

Register a toolbar item with `nbCell.createCellToolbarItem('mybtn', rank, widget)` to add a button to every cell.

## 🔗 Analogy

The cell toolbar is a mini remote on each cell — extension buttons sit there for quick per-cell actions.

## Related Concepts

- [[jupyterlab-ui|jupyterlab-ui]]
- [[lab-extension|lab-extension]]
- [[command-registry|command-registry]]
