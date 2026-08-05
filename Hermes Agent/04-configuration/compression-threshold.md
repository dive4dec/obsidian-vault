---
tags: [Configuration]
domain: Configuration
---

# Compression Threshold

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The percentage of context window at which compression triggers. Default: 0.50 (50%).

## Concrete Example

compression.threshold: 0.50. At 50% of 200K = 100K tokens, compression starts. Old messages are summarized to make room for new ones.

## Analogy

A water tank alarm - when the tank is 50% full, the alarm triggers. Compression threshold triggers when context is 50% full.

## Related Concepts

- [[compression-config|Compression Config]]
- [[config-yaml|Config YAML]]
- [[context-compression|Context Compression]]
