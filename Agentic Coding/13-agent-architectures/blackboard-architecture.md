---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Blackboard Architecture

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A shared knowledge base (blackboard) that multiple agents read from and write to. Agents contribute partial solutions that build up over time.

## 📋 Concrete Example

Blackboard: {topic: 'AI ethics', research: '...', outline: '...', draft: '...'}. Research Agent adds research. Outline Agent reads research, adds outline. Draft Agent reads both, adds draft. All share the same space.

## 🔗 Analogy

A group whiteboard in a brainstorming session - each person adds ideas, reads others' ideas, and builds on them. Nobody talks directly; they all write on the board. Blackboard architecture does this for agents.

## Related Concepts

- [[multi-agent-architecture|Multi-Agent Architecture]]
- [[shared-state|Shared State]]
- [[agent-communication|Agent Communication]]
