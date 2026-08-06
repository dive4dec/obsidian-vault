---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# theme-extension

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

A JupyterLab extension that provides a CSS theme. Registered via `IThemeManager`, it can override colors, fonts, and layout styles.

## 📋 Concrete Example

Create a theme plugin with `manager.setTheme('mytheme')` and ship a `index.css` with CSS variables.

## 🔗 Analogy

A theme extension is a phone wallpaper — it changes the look without altering the apps underneath.

## Related Concepts

- [[settings-registry|settings-registry]]
- [[jupyterlab-ui|jupyterlab-ui]]
- [[lab-extension|lab-extension]]
