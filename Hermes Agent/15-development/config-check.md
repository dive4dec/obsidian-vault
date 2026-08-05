---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Config Check

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Check for missing or outdated config options. Command: hermes config check.

## Concrete Example

hermes config check. Output: WARNING: memory.provider is not set (default: built-in). INFO: delegation.model is outdated. All checks pass. Identifies issues.

## Analogy

A home inspection - an expert checks your house for problems. Missing smoke detector? Outdated wiring? hermes config check inspects your config for issues.

## Related Concepts

- [[configuration|Configuration]]
- [[config-migrate|Config Migrate]]
- [[hermes-doctor|Hermes Doctor]]
