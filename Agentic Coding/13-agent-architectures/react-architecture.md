---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# ReAct Architecture

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

Reasoning + Acting interleaved: the agent thinks, acts, observes, thinks again. The simplest and most common agent pattern.

## 📋 Concrete Example

Thought: user wants weather. Action: call weather_api(`HK`). Observation: 28C sunny. Thought: nice weather, suggest outdoor activity. Action: respond to user.

## 🔗 Analogy

A cook tasting as they go - taste (observe), add salt (act), taste again (observe), adjust (act). They interleave tasting and adjusting until the dish is right.

## Related Concepts

- [[react-prompting|ReAct Prompting]]
- [[action-observation-loop|Action-Observation Loop]]
- [[agent-loop|Agent Loop]]
