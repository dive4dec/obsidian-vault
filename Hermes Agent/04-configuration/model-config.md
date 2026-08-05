---
tags: [Configuration]
domain: Configuration
---

# Model Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The model section of config.yaml. Controls which LLM to use, context length, and auxiliary models.

## Concrete Example

model: default: openrouter/anthropic/claude-sonnet-4, context_length: 200000, vision: openrouter/.../gpt-4o, compression: openrouter/.../deepseek-v3. The model section picks all LLMs.

## Analogy

Choosing players for a sports team - you pick the starting player (default), a substitute (compression), and a specialist (vision). The model config picks all LLMs for different roles.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[models-providers|Models & Providers]]
