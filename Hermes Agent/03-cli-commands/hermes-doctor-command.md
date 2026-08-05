---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Hermes Doctor Command

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

hermes doctor runs a full health check on your Hermes installation. It checks Python version, dependencies, config, API keys, and gateway status. Add --fix to auto-repair where possible.

## Concrete Example

You run hermes doctor --fix. It finds a missing dependency, installs it, and reports all systems green.

## Analogy

Like a car service. The mechanic checks everything and fixes what they can on the spot.

## Related Concepts

- [[hermes-status|Hermes Status]]
- [[config-check|Config Check]]
- [[prerequisites|Prerequisites]]
