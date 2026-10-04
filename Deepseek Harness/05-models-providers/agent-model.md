---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Agent Model

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

The agent model is the model bound to an agent when it is created. Entry points that create agents consult `dsh-agent-default-model` for a shared default provider and model; `currentSelection()` returns the route a fresh agent uses, and per-session selection takes precedence in the consumer.

## Concrete Example

A freshly created agent with no explicit route resolves `provider: 'deepseek'`, `model: 'deepseek-chat'` from the default-model service.

## Analogy

The default station set on the radio you hand a new user.

## Related Concepts

- [[default-model|Default Model]]
- [[subagent-model|Subagent Model]]
- [[model-selection|Model Selection]]
- [[model-preset|Model Preset]]

