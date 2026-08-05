---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Modular Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

An agent built from independent modules (planner, memory, tools, evaluator) that can be swapped or upgraded independently.

## 📋 Concrete Example

Swap the planner module: from ReAct to Plan-and-Execute. Memory module: from simple to RAG. Each module is independent - upgrade one without changing others.

## 🔗 Analogy

A gaming PC - swap the graphics card, add more RAM, upgrade the CPU. Each part is modular. Upgrade one without replacing the whole computer. Modular agents work the same way.

## Related Concepts

- [[agent-composition|Agent Composition]]
- [[modular-design|Modular Design]]
- [[agent-framework|Agent Framework]]
