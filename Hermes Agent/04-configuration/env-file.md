---
tags: [Configuration]
domain: Configuration
---

# Env File

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A file (~/.hermes/.env) storing API keys and secrets. Separate from config.yaml for security.

## Concrete Example

.env: OPENROUTER_API_KEY=sk-or-xxx, ANTHROPIC_API_KEY=sk-ant-xxx. Hermes reads these for authentication. The model never sees them (redacted).

## Analogy

A locked drawer in your desk - you keep valuables (API keys) there, not on the desk. The .env file is the locked drawer for secrets.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[secrets-management|Secrets Management]]
- [[secret-redaction|Secret Redaction]]
