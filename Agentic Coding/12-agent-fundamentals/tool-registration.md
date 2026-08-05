---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Tool Registration

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Before an agent can use a tool, it must be registered - defined with its name, description, parameters, and safety level.

## 📋 Concrete Example

Register: name=`search_web`, description='Search the internet', params={`query`: str, `max_results`: int}, safety=`low`. The agent sees this description and knows when to use the tool.

## 🔗 Analogy

Registering a new course at school - you provide the course name, description, prerequisites, and credit hours. Students (agents) see the catalog and choose the right course (tool).

## Related Concepts

- [[tool-use|Tool Use]]
- [[function-calling|Function Calling]]
- [[action-space|Action Space]]
