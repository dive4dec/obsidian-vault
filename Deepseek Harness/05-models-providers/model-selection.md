---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Selection

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-client-ui-model-selection` lets users switch the model and reasoning effort for an existing session through the `/model` popup or the composer's model control. Both surfaces show the same provider-grouped choices; a complete selection applies to the next request while a running step keeps the model it started with. The GUI requires catalog membership for selection and submission.

## Concrete Example

DeepSeek Account appears first and DeepSeek second in the provider list; the `/model` popup applies the selected model's default effort, and the composer can then choose any advertised effort.

## Analogy

A radio's station selector — pick a station and it tunes the next song.

## Related Concepts

- [[default-model|Default Model]]
- [[model-settings-ui|Model Settings UI]]
- [[model-id|Model ID]]
- [[reasoning-model|Reasoning Model]]

