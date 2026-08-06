---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# jupyterlab-ui

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

The visual layout of JupyterLab: dock panel, sidebars, menu bar, and tabs. Each region is managed by Lumino widgets.

## 📋 Concrete Example

The main area uses a `DockPanel` for tabs; the left sidebar holds `SideBar` widgets for file browser and commands.

## 🔗 Analogy

JupyterLab UI is a tiled desktop — windows snap into panels, tabs, and sidebars you can rearrange.

## Related Concepts

- [[lumino-widgets|lumino-widgets]]
- [[command-registry|command-registry]]
- [[left-sidebar|left-sidebar]]
