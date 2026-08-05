---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Model-Based Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

The agent maintains an internal model of the world and uses it to make better decisions than a reflex agent.

## 📋 Concrete Example

The agent tracks: 'File A was modified at 2pm. Tests last passed at 1pm. So tests might fail now.' It uses its world model to predict outcomes before acting.

## 🔗 Analogy

A chess player who thinks several moves ahead - they maintain a mental model of the board and predict what happens after each move. Model-based agents do this with their environment.

## Related Concepts

- [[reflex-architecture|Reflex Architecture]]
- [[world-model|World Model]]
- [[state-tracking|State Tracking]]
