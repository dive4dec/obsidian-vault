---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Default Model

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-agent-default-model` gives newly created agents a shared default provider and model when their sessions do not specify one. `provider`, `model`, and `reasoningEffort` are live config fields; `currentSelection()` returns the active selection and `saveSelection()` persists it to the profile patch. Per-session selection remains owned by the entry point.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-agent-default-model'
  config: { provider: deepseek, model: deepseek-chat }
```

The consumer opening a model request owns availability diagnostics; the service does not validate catalog membership.

## Analogy

The last-used station the radio remembers and plays when you first turn it on.

## Related Concepts

- [[model-selection|Model Selection]]
- [[agent-model|Agent Model]]
- [[model-preset|Model Preset]]
- [[model-id|Model ID]]

