---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Persistent State

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Between conversations, the agent stores state - user preferences, task progress, learned facts - in a database or file.

## 📋 Concrete Example

State: {`user_name`: `Alice`, `skill_level`: `intermediate`, `current_project`: `todo-app`, `completed_tasks`: [`setup`, `models`]}. When the user returns, the agent loads this state and continues.

## 🔗 Analogy

A save file in a video game - it stores your level, inventory, and progress. When you reload, you continue from where you left off. Persistent state does this for agents.

## Related Concepts

- [[agent-memory|Agent Memory]]
- [[state-management|State Management]]
- [[long-term-memory|Long-Term Memory]]
