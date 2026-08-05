---
tags: [Memory-&-State]
domain: Memory & State
---

# Session State

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

The state of the current session - current task, progress, active tools, recent actions. Resets when the session ends.

## 📋 Concrete Example

Session state: {task: 'debugging app.py', step: 3, files_read: [`app.py`, `utils.py`], errors_found: 2, fixes_applied: 1}. This state guides the agent within the current session.

## 🔗 Analogy

A game save slot - it stores your current level, health, inventory, and position. When you quit, it saves. When you reload, it restores. Session state is the agent's save slot.

## Related Concepts

- [[short-term-memory|Short-Term Memory]]
- [[working-memory|Working Memory]]
- [[agent-lifecycle|Agent Lifecycle]]
