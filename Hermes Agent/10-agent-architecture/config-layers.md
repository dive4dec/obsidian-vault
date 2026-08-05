---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Config Layers

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Hermes loads settings from multiple layers: defaults, config file, environment variables, and runtime overrides.

## Concrete Example

The default model is A, the config file sets it to B, and a runtime flag sets it to C. The last layer wins, so C is used.

## Analogy

Like school rules layered on top of government rules: the more specific one applies.

## Related Concepts

- [[system-prompt|system prompt]]
- [[environment-hints|environment hints]]
- [[personality|personality]]
