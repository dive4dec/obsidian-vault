---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Settings UI

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-client-ui-settings-models` is the Models settings page of the dsh web client. Users configure API keys (stored write-only under the profile's credential reference), edit each provider's model list, and hand-declare custom pi-ai routes, with provider rows and one editor card at a time. It also walks first-run users through a versioned preview notice and a conditional DeepSeek credential step.

## Concrete Example

Open Settings > Models to see every configured provider as a row; saving credentials or a custom provider preserves the selected model, and DeepSeek Account lists before DeepSeek.

## Analogy

The control panel where you plug in each provider's key and pick which models it serves.

## Related Concepts

- [[model-selection|Model Selection]]
- [[default-model|Default Model]]
- [[provider-auth|Provider Auth]]
- [[multi-provider|Multi-Provider]]

