---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# datagrid

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A high-performance table widget (`@lumino/datagrid`) for rendering large datasets in JupyterLab without slow DOM rendering.

## 📋 Concrete Example

Create `const grid = new DataGrid(); grid.dataModel = model;` and add the grid widget to the dock panel.

## 🔗 Analogy

A datagrid is a spreadsheet engine — it scrolls through millions of rows smoothly using canvas rendering.

## Related Concepts

- [[lumino-widgets|lumino-widgets]]
- [[jupyterlab-ui|jupyterlab-ui]]
- [[mimerenderer|mimerenderer]]
