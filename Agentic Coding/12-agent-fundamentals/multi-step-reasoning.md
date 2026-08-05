---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Multi-Step Reasoning

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Real tasks require multiple reasoning steps, not just one. The agent chains reasoning across many steps to reach a solution.

## 📋 Concrete Example

Step 1: 'I need data.' -> search. Step 2: 'Data is in CSV.' -> read file. Step 3: 'Need to clean it.' -> run script. Step 4: 'Now analyze.' -> run analysis. Each step builds on the previous.

## 🔗 Analogy

A detective building a case - clue 1 leads to suspect, suspect leads to location, location leads to evidence. Each step builds on the last. Multi-step reasoning chains conclusions.

## Related Concepts

- [[chain-of-thought|Chain of Thought]]
- [[react-prompting|ReAct Prompting]]
- [[task-planning|Task Planning]]
