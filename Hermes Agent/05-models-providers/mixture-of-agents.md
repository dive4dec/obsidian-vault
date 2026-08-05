---
tags: [Models-&-Providers]
domain: Models & Providers
---

# Mixture of Agents

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Using multiple models in parallel or sequence to get better results. Hermes supports this via the moa toolset.

## Concrete Example

Ask a question. Hermes sends it to Claude, GPT-4o, and Gemini simultaneously. Collects all 3 responses. Synthesizes the best answer from all three.

## Analogy

Asking 3 teachers the same question and combining their answers. Mixture of agents combines multiple LLMs for better results.

## Related Concepts

- [[model-routing|Model Routing]]
- [[provider-selection|Provider Selection]]
- [[models-providers|Models & Providers]]
