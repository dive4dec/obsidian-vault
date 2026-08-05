---
tags: [Configuration]
domain: Configuration
---

# Target Ratio

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The target context usage after compression. Default: 0.20 (20%).

## Concrete Example

compression.target_ratio: 0.20. After compression, context is reduced to 20% of capacity = 40K tokens. 60K tokens freed for new messages.

## Analogy

A diet target - after cutting, you want to reach 20% body fat. Target ratio is the target context level after compression.

## Related Concepts

- [[compression-config|Compression Config]]
- [[config-yaml|Config YAML]]
- [[context-compression|Context Compression]]
