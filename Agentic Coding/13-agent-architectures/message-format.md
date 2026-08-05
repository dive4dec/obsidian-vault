---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Message Format

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

The structure of messages agents exchange. A clear format prevents misunderstanding.

## 📋 Concrete Example

Format: {`from`: `CoderAgent`, `to`: `TestAgent`, `type`: `task_complete`, `content`: {`file`: `app.py`, `status`: `ready_for_testing`}, `timestamp`: '2025-08-03T14:30:00Z'}

## 🔗 Analogy

A formal letter format - Date, Recipient, Subject, Body, Signature. Everyone knows where to look for each piece of information. Message formats do this for agent communication.

## Related Concepts

- [[agent-protocol|Agent Protocol]]
- [[agent-communication|Agent Communication]]
- [[json|JSON]]
