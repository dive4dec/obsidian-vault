---
tags: [Configuration]
domain: Configuration
---

# Config Diff

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Show what changed since the default config. Command: hermes config diff.

## Concrete Example

hermes config diff. Output: model.default: default=openrouter/auto, yours=anthropic/claude-sonnet-4. memory.enabled: default=false, yours=true. Shows your customizations.

## Analogy

A diff between your essay and the template - it shows what you changed. Config diff shows what you customized vs defaults.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-defaults|Config Defaults]]
- [[hermes-config|Hermes Config]]
