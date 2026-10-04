---
tags: [DSH-Configuration]
domain: Configuration
---

# Shortcuts

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-shortcuts` customizes application keyboard commands for each device. Desktop and Web choose separate defaults for the receiving device, and custom bindings survive reloads on the same device. Commands disappear when their owning plugin unloads, while their saved overrides remain available for reinstallation. Windows renders modifier separators and simultaneous ordinary keys distinctly in tooltips and the shortcut reference.

## Concrete Example

Rebind a command on the Web device; the binding persists for that device even after the owning plugin unloads.

## Analogy

It is a per-device keymap with per-plugin command ownership.

## Related Concepts

- [[settings-general|General Settings]]
- [[theme-config|Theme]]
