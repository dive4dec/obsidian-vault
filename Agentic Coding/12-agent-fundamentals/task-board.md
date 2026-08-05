---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Task Board

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

A shared task list that multiple agents read from and write to. It coordinates who does what and tracks progress.

## 📋 Concrete Example

Board: [{`task`: 'write tests', `assigned`: `Agent_C`, `status`: `in_progress`}, {`task`: 'fix bug', `assigned`: `Agent_B`, `status`: `done`}]. Agents pick up unassigned tasks and update status when done.

## 🔗 Analogy

A Kanban board in a team office - sticky notes move from 'To Do' to 'In Progress' to `Done.` Everyone sees the board and knows what to work on. A task board does this for agents.

## Related Concepts

- [[multi-agent-coordination|Multi-Agent Coordination]]
- [[kanban-boardtask-assignment|Kanban Board","Task Assignment]]
