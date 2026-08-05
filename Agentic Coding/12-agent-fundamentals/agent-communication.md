---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Agent Communication

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Agents in a multi-agent system need to exchange information. Communication protocols define how they share messages, results, and status.

## 📋 Concrete Example

Agent A sends to B: {`task`: `find_stock_price`, `result`: 'AAPL: $185', `confidence`: 0.95}. Agent B receives this and uses it in its reasoning. Structured messages enable reliable coordination.

## 🔗 Analogy

Players on a basketball team calling plays - 'Pick and roll!', 'Screen left!', 'I am open!' Each call (message) coordinates the team. Agent communication protocols are the plays and calls of AI teams.

## Related Concepts

- [[multi-agent-system|Multi-Agent System]]
- [[message-passing|Message Passing]]
- [[coordination|Coordination]]
