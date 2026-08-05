---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Agent Initialization

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

Setting up the agent before it starts: loading system prompt, registering tools, initializing memory, setting guardrails.

## 📋 Concrete Example

Init steps: load system prompt ('You are a coding assistant'), register tools (read_file, write_file, run_code), load memory from database, set guardrails (max 50 steps, $10 budget).

## 🔗 Analogy

Briefing a new employee on day 1 - give them their role (system prompt), access cards (tools), previous project notes (memory), and company rules (guardrails). Then they start working.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[tool-registration|Tool Registration]]
- [[guardrails|Guardrails]]
- [[agent-memory|Agent Memory]]
