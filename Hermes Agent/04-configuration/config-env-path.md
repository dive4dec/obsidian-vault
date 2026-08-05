---
tags: [Configuration]
domain: Configuration
---

# Config Env Path

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Show the location of the .env file. Command: hermes config env-path.

## Concrete Example

hermes config env-path. Output: /home/alice/.hermes/.env. The .env file holds API keys and secrets, separate from config.yaml.

## Analogy

Finding where you keep your spare keys - you need the location. hermes config env-path tells you where the secrets file is.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[env-file|Env File]]
- [[secrets-management|Secrets Management]]
