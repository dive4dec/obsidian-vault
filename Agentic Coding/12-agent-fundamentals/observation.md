---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Observation

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

An agent perceives its environment through observations - tool outputs, user messages, system state. Observations inform decisions.

## 📋 Concrete Example

The agent calls get_weather(`HK`) and observes: '28C, sunny.' This observation updates its understanding. Next action depends on this observation.

## 🔗 Analogy

A driver checking mirrors and road signs - each check is an observation. The driver adjusts behaviour based on what they observe. Agents observe tool outputs to adjust their actions.

## Related Concepts

- [[react-prompting|ReAct Prompting]]
- [[action-observation-loop|Action-Observation Loop]]
- [[environment|Environment]]
