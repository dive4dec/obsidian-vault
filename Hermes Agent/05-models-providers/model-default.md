---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Model Default

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

The default model used for all conversations unless overridden. Set in config or with hermes model set.

## Concrete Example

model.default: anthropic/claude-sonnet-4. Every new session uses this model. Change: hermes model set openai/gpt-4o. New default.

## Analogy

Your usual order at a restaurant - you order it by default. The model default is Hermes usual LLM.

## Related Concepts

- [[hermes-model|Hermes Model]]
- [[model-config|Model Config]]
- [[config-yaml|Config YAML]]
