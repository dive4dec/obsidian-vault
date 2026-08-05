---
tags: [Configuration]
domain: Configuration
---

# Hermes Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The CLI command group for managing configuration. Subcommands: edit, set, check, migrate, path, env-path.

## Concrete Example

hermes config edit (open editor). hermes config set model.default X (change one value). hermes config check (validate). All config management in one command group.

## Analogy

A settings app on your phone - one app with many options. hermes config is the settings app for Hermes.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-edit|Config Edit]]
- [[config-set|Config Set]]
