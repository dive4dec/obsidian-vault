---
tags: [Configuration]
domain: Configuration
---

# Config Migrate

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Update config.yaml with new options after a Hermes update. Command: hermes config migrate.

## Concrete Example

hermes update -> new version adds delegation.max_spawn_depth. hermes config migrate adds it with the default value. Config is now compatible with the new version.

## Analogy

Renewing your ID card when the format changes - new fields are added. Config migrate adds new fields to your config after an update.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-check|Config Check]]
- [[hermes-update|Hermes Update]]
