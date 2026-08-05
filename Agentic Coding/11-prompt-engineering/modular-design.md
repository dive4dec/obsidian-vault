---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Modular Design

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Breaking prompts into reusable modules (instructions, examples, constraints) that can be mixed and matched for different tasks.

## 📋 Concrete Example

Module A: 'You are a Python tutor.' Module B: 'Explain [concept].' Module C: 'Include a code example.' Module D: 'Max 200 words.' For different tasks, swap modules: use Module A + B + D for a brief explanation, A + B + C + D for a full one.

## 🔗 Analogy

Lego blocks - you have different pieces (modules) that snap together. A car chassis + wheels + steering wheel = a car. Swap wheels for tank treads = a tank. Modular design lets you build different prompts from reusable parts.

## Related Concepts

- [[task-decomposition|Task Decomposition]]
- [[prompt-template|Prompt Template]]
- [[prompt-engineering|Prompt Engineering]]
