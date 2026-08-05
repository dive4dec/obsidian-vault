---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Auxiliary Model Selection

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Choosing auxiliary models for vision, compression, and session search. Configured separately.

## Concrete Example

model.vision: gpt-4o (best vision). model.compression: deepseek-v3 (cheap). model.session_search: text-embedding-3-small (fast). Each auxiliary model chosen for its task.

## Analogy

Choosing specialists for a team - a doctor for health, a lawyer for legal, an accountant for finance. Auxiliary model selection picks specialists for each task.

## Related Concepts

- [[auxiliary-models|Auxiliary Models]]
- [[model-config|Model Config]]
- [[provider-selection|Provider Selection]]
