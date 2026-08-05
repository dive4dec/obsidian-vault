---
tags: [Configuration]
domain: Configuration
---

# Compression Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The compression section: enabled, threshold, target_ratio. Controls automatic context compression.

## Concrete Example

compression: enabled: true, threshold: 0.50, target_ratio: 0.20. At 50% of context, compress to 20% of capacity. Keeps conversations going without hitting limits.

## Analogy

A thermostat - you set when the AC turns on (threshold) and the target temperature (target_ratio). Compression config sets when and how much to compress.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[context-compression|Context Compression]]
