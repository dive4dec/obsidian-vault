---
tags: [Configuration]
domain: Configuration
---

# Config Validation

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Hermes validates config.yaml on startup. Invalid values are rejected with helpful error messages.

## Concrete Example

config: max_turns: -5. Hermes: ERROR: max_turns must be positive. Fix: hermes config set agent.max_turns 30. Invalid config is caught early.

## Analogy

A bouncer at a club - they check IDs at the door. Invalid IDs are rejected. Config validation checks values at startup.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-check|Config Check]]
- [[hermes-config|Hermes Config]]
