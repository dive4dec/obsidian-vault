---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Config Migrate

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Update config.yaml with new options after an update. Command: hermes config migrate.

## Concrete Example

hermes config migrate. New version adds: delegation.max_spawn_depth. Your config does not have it. Migrate adds it with the default value. Config is now up to date.

## Analogy

Renewing your ID card - when the format changes, you get a new card with the new fields. Config migrate updates your config with new fields after an update.

## Related Concepts

- [[configuration|Configuration]]
- [[hermes-update|Hermes Update]]
- [[config-check|Config Check]]
