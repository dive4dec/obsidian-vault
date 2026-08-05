---
tags: [Configuration]
domain: Configuration
---

# Managed Scope

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A mode where certain config settings are locked and cannot be changed. Used in enterprise or educational deployments.

## Concrete Example

Managed scope: security.redact_secrets locked to true. Students cannot disable it. The teacher (admin) manages it. Ensures policies are enforced.

## Analogy

School uniform rules - students cannot change them. Managed scope locks certain Hermes settings so users cannot change them.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[security-config|Security Config]]
- [[configuration|Configuration]]
