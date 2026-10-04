---
tags: [DSH-Configuration]
domain: Configuration
---

# Plugin Inventory

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-host-plugin-inventory` lets clients call `pluginInventory/list` to display the host's current plugins in load order, including each entry's identifier, module specifier, effective enablement, live phase, and available display text. Deployments with an agent-preset roster also report each preset's metadata, health, and flattened plugin composition. Each response is a point-in-time, read-only snapshot for display and diagnostics. `dsh-client-ui-settings-plugin-inventory` renders this as the read-only **Plugin list** tab.

## Concrete Example

The Plugin list tab shows agent presets (open by default) then the collapsed global inventory, with enablement and runtime status per entry.

## Analogy

It is a read-only process list of everything loaded into your profile.

## Related Concepts

- [[settings-plugins|Plugin Settings]]
- [[manifest|package-manifest]]
- [[scope|Scope]]
