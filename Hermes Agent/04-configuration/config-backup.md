---
tags: [Configuration]
domain: Configuration
---

# Config Backup

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Saving a copy of config.yaml before making changes. Useful for rollback.

## Concrete Example

cp config.yaml config.yaml.bak. Make changes. If things break: cp config.yaml.bak config.yaml. Back to working state.

## Analogy

Backing up your phone before an update - if the update fails, you restore the backup. Config backup saves your settings before changes.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-edit|Config Edit]]
- [[config-migrate|Config Migrate]]
