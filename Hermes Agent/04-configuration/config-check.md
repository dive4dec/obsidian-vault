---
tags: [Configuration]
domain: Configuration
---

# Config Check

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Check config for missing or outdated options. Command: hermes config check.

## Concrete Example

hermes config check. Output: OK: model.default set. WARNING: memory.provider not set (default: built-in). Identifies issues without fixing them.

## Analogy

A car diagnostic tool - it scans the engine and reports problems. hermes config check scans your config and reports issues.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-migrate|Config Migrate]]
- [[hermes-doctor|Hermes Doctor]]
