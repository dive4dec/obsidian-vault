---
tags: [Configuration]
domain: Configuration
---

# Terminal Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The terminal section of config.yaml. Controls shell, timeout, backend (local vs SSH).

## Concrete Example

terminal: shell: /bin/bash, timeout: 180, backend: local. The terminal section controls how shell commands are executed.

## Analogy

Settings on a microwave - power level, timer, mode. The terminal config sets how the terminal tool operates.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[terminal-backend|Terminal Backend]]
