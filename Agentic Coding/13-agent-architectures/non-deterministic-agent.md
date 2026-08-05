---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Non-Deterministic Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

An agent that may take different actions for the same input due to temperature, timing, or learning. More creative but harder to debug.

## 📋 Concrete Example

Same prompt, different runs: Run 1 writes code one way, Run 2 writes it differently. Both work, but the approach varies. Non-determinism brings creativity but makes debugging harder.

## 🔗 Analogy

A chef cooking without a recipe - same ingredients, but each time the dish is slightly different. Sometimes better, sometimes worse. Non-deterministic agents are creative but unpredictable.

## Related Concepts

- [[temperature|Temperature]]
- [[deterministic-agent|Deterministic Agent]]
- [[creativity|Creativity]]
