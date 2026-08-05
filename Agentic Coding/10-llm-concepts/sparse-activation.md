---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Sparse Activation

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

In MoE models, only a subset of experts is active per token. This means not all parameters are used for every prediction - sparse activation.

## 📋 Concrete Example

If a model has 64 experts and uses 2 per token, only 2/64 = 3% of parameters are active per token. This is sparse activation - most of the model `sleeps` while a few experts `work`.

## 🔗 Analogy

A huge office building where only the relevant departments are staffed each day - the building has capacity for 64 departments, but on any given task, only 2 are actively working. The rest are available but inactive.

## Related Concepts

- [[mixture-of-experts|Mixture of Experts]]
- [[routing|Routing]]
- [[dense-model|Dense Model]]
