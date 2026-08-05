---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Graceful Degradation

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

When something goes wrong, the agent should degrade gracefully - provide a partial result rather than crashing completely.

## 📋 Concrete Example

Full capability: agent writes, tests, and deploys code. If deployment fails: agent still delivers the written and tested code with a note: 'Deployment failed, but code is ready.' Partial result, not a crash.

## 🔗 Analogy

A GPS losing satellite signal - instead of crashing, it shows the last known route and says 'Signal lost, following cached route.' Graceful degradation gives partial value even when something fails.

## Related Concepts

- [[error-recovery|Error Recovery]]
- [[robustness|Robustness]]
- [[fallback-prompt|Fallback Prompt]]
