---
tags: [Configuration]
domain: Configuration
---

# Config Set

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Change a single config value from the command line. Command: hermes config set KEY VALUE.

## Concrete Example

hermes config set model.default anthropic/claude-sonnet-4. One line, one change. No editor needed. Faster than config edit for single values.

## Analogy

A quick dial on a combination lock - you change one number at a time. hermes config set changes one config value at a time.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-edit|Config Edit]]
- [[hermes-config|Hermes Config]]
