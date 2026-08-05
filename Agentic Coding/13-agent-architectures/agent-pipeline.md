---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Agent Pipeline

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A fixed sequence of agents where each one's output feeds into the next, like an assembly line.

## 📋 Concrete Example

Pipeline: Research Agent -> Outline Agent -> Draft Agent -> Edit Agent -> Publish Agent. Each takes the previous output, processes it, and passes to the next.

## 🔗 Analogy

A car assembly line - chassis station -> engine station -> paint station -> inspection station. Each station takes the car from the previous one, adds its part, passes it on. Agent pipelines are assembly lines for tasks.

## Related Concepts

- [[sequential-execution|Sequential Execution]]
- [[prompt-chaining|Prompt Chaining]]
- [[multi-agent-architecture|Multi-Agent Architecture]]
