---
tags: [Configuration]
domain: Configuration
---

# Context Window

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The active portion of context length being used for the current conversation. Changes as the conversation grows.

## Concrete Example

Start: 2K tokens (system prompt). After 10 messages: 15K. After 50 messages: 80K. Context window grows. At threshold, compression shrinks it.

## Analogy

A backpack being packed - it starts empty, fills up as you add items. The context window fills as the conversation grows.

## Related Concepts

- [[context-length|Context Length]]
- [[context-compression|Context Compression]]
- [[config-yaml|Config YAML]]
