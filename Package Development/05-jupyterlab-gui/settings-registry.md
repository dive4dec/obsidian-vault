---
tags: [JupyterLab-GUI]
domain: JupyterLab GUI
---

# settings-registry

> **Domain:** [[_jupyterlab-gui-moc|JupyterLab GUI]]

## 🎯 Motivation

JupyterLab's system for loading and storing user settings. Extensions declare a schema and read settings via `ISettingRegistry`.

## 📋 Concrete Example

In a plugin, `settingRegistry.load('myext:settings')` returns a `ISettings` object you read with `get('key')`.

## 🔗 Analogy

The settings registry is a control panel — each extension has knobs the user can tune and save.

## Related Concepts

- [[widget-registry|widget-registry]]
- [[theme-extension|theme-extension]]
- [[jupyterlab-ui|jupyterlab-ui]]
