---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Sequential Execution

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

Agents run one after another, each waiting for the previous to finish. Simple and predictable but slower.

## 📋 Concrete Example

Agent A (10s) -> Agent B (15s) -> Agent C (5s) = 30s total. Each starts only after the previous finishes. No overlap.

## 🔗 Analogy

Baking a cake - mix ingredients (step 1), then bake (step 2), then decorate (step 3). Each step must finish before the next. Sequential execution is step-by-step, no shortcuts.

## Related Concepts

- [[agent-pipeline|Agent Pipeline]]
- [[parallel-processing|Parallel Processing]]
- [[efficiency|Efficiency]]
