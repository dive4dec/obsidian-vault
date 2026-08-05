---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Star Topology

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

One central hub agent communicates with all others. Simple to manage but the hub is a bottleneck.

## 📋 Concrete Example

Orchestrator communicates with: Coder, Tester, Reviewer, Deployer. They do not talk to each other directly - all communication goes through the orchestrator.

## 🔗 Analogy

A star network in a classroom - all students raise hands and talk to the teacher (hub). Students do not talk to each other; everything goes through the teacher. Simple but the teacher can become a bottleneck.

## Related Concepts

- [[agent-topology|Agent Topology]]
- [[orchestrator-agent|Orchestrator Agent]]
- [[multi-agent-architecture|Multi-Agent Architecture]]
