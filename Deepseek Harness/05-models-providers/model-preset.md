---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Model Preset

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

A model preset is a saved model configuration — provider, model, and optional reasoning effort — that a fresh agent or session can start from. The default-model service stores exactly this shape; `saveSelection({ provider, model, reasoningEffort })` persists the complete selection to the profile patch for later agents.

## Concrete Example

`await ctx.agentDefaultModel.saveSelection({ provider: 'deepseek', model: 'deepseek-chat', reasoningEffort: 'high' })` stores the preset; `currentSelection()` reads it back detached.

## Analogy

A saved camera profile — one tap restores your favorite exposure, focus, and frame.

## Related Concepts

- [[default-model|Default Model]]
- [[model-config|Model Config]]
- [[model-selection|Model Selection]]
- [[agent-model|Agent Model]]

