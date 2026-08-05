---
tags: [Configuration]
domain: Configuration
---

# Auxiliary Models

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Models used for non-chat tasks: vision, compression, session search, command safety analysis. Configured separately from the main model.

## Concrete Example

model.vision: gpt-4o (image analysis). model.compression: deepseek-v3 (summarizing). model.session_search: text-embedding-3-small (searching). Each auxiliary model specializes.

## Analogy

Assistants in a company - the main worker (default model) does the main job, but assistants (auxiliary models) handle specific tasks like filing, translating, etc.

## Related Concepts

- [[model-config|Model Config]]
- [[models-providers|Models & Providers]]
- [[config-yaml|Config YAML]]
