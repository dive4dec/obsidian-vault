---
tags: [DSH-Configuration]
domain: Configuration
---

# Validate Config

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Validation runs before a profile boots and before any config write touches disk. Plugins validate their configuration against the composed schemas at load, so an invalid `mode` or unknown field fails loud instead of silently changing behavior. The config editor validates the complete candidate write before committing, and invalid values leave the file unchanged.

## Concrete Example

An unknown top-level key in `.credentials.yaml` fails at startup rather than being silently ignored.

## Analogy

It is the type-check that must pass before your config is allowed to run.

## Related Concepts

- [[config-check|Config Check]]
- [[config-schema|Config Schema]]
- [[config-troubleshoot|Config Troubleshooting]]
