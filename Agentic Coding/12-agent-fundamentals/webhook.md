---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Webhook

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

A webhook is an HTTP callback: when something happens in one system, it sends an HTTP request to another system (like an agent) to trigger action.

## 📋 Concrete Example

GitHub PR opened -> webhook sends POST to agent's URL -> agent receives it, reviews code, posts comments. The webhook connects the event to the agent.

## 🔗 Analogy

A doorbell - when someone presses it (event), it rings inside (callback). You do not need to check the door constantly. Webhooks are doorbells for software - they notify when something happens.

## Related Concepts

- [[trigger|Trigger]]
- [[event-driven|Event-Driven]]
- [[api|API]]
