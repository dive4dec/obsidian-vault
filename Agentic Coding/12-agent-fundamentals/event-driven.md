---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Event-Driven

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

The agent is triggered by events (webhooks, file changes, messages, timers) rather than running continuously or waiting for user input.

## 📋 Concrete Example

Webhook fires when a GitHub PR is opened. The agent automatically reviews the code and posts comments. It is driven by the PR event, not a user request.

## 🔗 Analogy

A smoke detector - it does nothing until smoke is detected (event). Then it alarms. Event-driven agents wait for triggers, then act. Efficient - they do not waste resources when idle.

## Related Concepts

- [[reactive-behavior|Reactive Behavior]]
- [[webhook|Webhook]]
- [[trigger|Trigger]]
