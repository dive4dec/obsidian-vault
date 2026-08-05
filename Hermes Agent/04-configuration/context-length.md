---
tags: [Configuration]
domain: Configuration
---

# Context Length

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The maximum number of tokens the model can process. Configured per-model in config.yaml.

## Concrete Example

model.context_length: 200000. The model handles up to 200K tokens. If conversation exceeds this, compression triggers. Different models have different limits.

## Analogy

A backpack capacity - it holds 20L. If you try to put in 25L, something must come out. Context length is the backpack capacity for the model.

## Related Concepts

- [[model-config|Model Config]]
- [[config-yaml|Config YAML]]
- [[context-window|Context Window]]
