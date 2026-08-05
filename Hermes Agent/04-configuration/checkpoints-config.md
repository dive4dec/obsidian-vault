---
tags: [Configuration]
domain: Configuration
---

# Checkpoints Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The checkpoints section: enabled, max_snapshots, interval. Controls filesystem snapshots.

## Concrete Example

checkpoints: enabled: true, max_snapshots: 50, interval: 0. Hermes takes snapshots before risky changes. Up to 50 saved. The checkpoints config controls this.

## Analogy

A security camera settings - recording on/off, how many days saved, recording interval. Checkpoints config sets the filesystem camera.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[checkpoints|Checkpoints]]
