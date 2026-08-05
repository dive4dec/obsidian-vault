---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Plan-and-Execute Architecture

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

First create a complete plan, then execute each step sequentially. More structured than ReAct but less adaptive.

## 📋 Concrete Example

Step 1: Plan = [research, write outline, draft, edit, publish]. Steps 2-6: execute each. If step 3 fails, you might need to re-plan from step 3.

## 🔗 Analogy

A builder following blueprints - first the architect draws complete plans (plan), then the builder executes each step. If a wall is wrong, they revise the blueprint before continuing.

## Related Concepts

- [[task-planning|Task Planning]]
- [[sequential-execution|Sequential Execution]]
- [[react-architecture|ReAct Architecture]]
