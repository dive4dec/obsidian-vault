---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Error Recovery

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

When an action fails (API error, file not found, compilation error), the agent must recover and continue.

## 📋 Concrete Example

Error: write_file fails (disk full). Recovery: try a different path, or notify user, or clean up temp files and retry. The agent does not crash - it adapts and finds an alternative.

## 🔗 Analogy

A hiker encountering a blocked trail - they do not give up. They check the map, find an alternate route, and continue. Error recovery is the agent finding alternate routes when actions fail.

## Related Concepts

- [[error-handling|Error Handling]]
- [[agent-loop|Agent Loop]]
- [[robustness|Robustness]]
