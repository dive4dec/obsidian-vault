---
tags: [DSH-Configuration]
domain: Configuration
---

# Plugin Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-plugins` is the **Built-in plugins** settings section, which is a shell: it owns the navigation entry and the tab row, and every tab in it is registered by another plugin — the read-only inventory ships one. Configuring a built-in plugin happens on the sidebar's Plugins page, where each official plugin's own companion package registers its page.

## Concrete Example

Open Settings → Built-in plugins; the **Plugin list** tab (`dsh-client-ui-settings-plugin-inventory`) lists agent presets and the global inventory.

## Analogy

It is a tab strip whose tabs are plugins, not hard-coded pages.

## Related Concepts

- [[plugin-inventory|Plugin Inventory]]
- [[settings|Settings]]
- [[settings-general|General Settings]]
