---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Residual Connection

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

In deep networks, later layers can forget what earlier layers learned. Residual connections add earlier information directly to later layers, preserving it.

## 📋 Concrete Example

Layer 5's output = Layer 5's processing + Layer 4's input. This 'skip connection' ensures information from early layers is never lost, even in 100-layer models.

## 🔗 Analogy

A relay race where each runner carries a baton AND a copy of all previous batons - nothing is lost between handoffs. Even the 100th runner has information from the first.

## Related Concepts

- [[layer|Layer]]
- [[transformer-architecture|Transformer Architecture]]
- [[gradient-flow|Gradient Flow]]
