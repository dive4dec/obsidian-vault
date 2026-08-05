---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Agent Protocol

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

The rules and formats agents use to communicate - message structure, response formats, error handling.

## 📋 Concrete Example

Protocol: messages are JSON with {from, to, type, content, timestamp}. Type can be `request`, `response`, `status`, `error`. All agents follow this protocol for reliable communication.

## 🔗 Analogy

Radio communication protocols - `over` means I am done speaking, `copy` means I understood, 'stand by' means wait. Everyone follows these rules. Agent protocols are the communication rules for AI agents.

## Related Concepts

- [[agent-communication|Agent Communication]]
- [[multi-agent-architecture|Multi-Agent Architecture]]
- [[message-format|Message Format]]
