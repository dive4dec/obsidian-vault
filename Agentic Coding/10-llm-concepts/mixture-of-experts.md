---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Mixture of Experts

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Instead of using the entire model for every token, MoE routes each token to a few `expert` sub-networks. This scales up capacity without scaling up compute.

## 📋 Concrete Example

A 1-trillion-parameter MoE might only use 12B parameters per token. 64 experts, top-2 routing: each token goes to 2 experts. Total knowledge is huge, but per-token cost is manageable.

## 🔗 Analogy

A hospital with 64 specialist doctors - when a patient arrives, they don't see all 64. They see the 2 most relevant specialists. The hospital has vast expertise, but each visit is efficient.

## Related Concepts

- [[parameters|Parameters]]
- [[routing|Routing]]
- [[model-size|Model Size]]
- [[sparse-activation|Sparse Activation]]
