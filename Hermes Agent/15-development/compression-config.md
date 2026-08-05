---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Compression Config

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Configuration for context compression: enabled, threshold (0.50), target_ratio (0.20).

## Concrete Example

config: compression: enabled: true, threshold: 0.50, target_ratio: 0.20. At 50% of context, compress to 20%. 100K context: compress at 50K tokens to 20K. Configurable.

## Analogy

A thermostat setting - you set when the AC turns on (threshold) and how cool it gets (target). Compression config sets when compression triggers and how much it compresses.

## Related Concepts

- [[context-compression|Context Compression]]
- [[configuration|Configuration]]
- [[agent-loop|Agent Loop]]
