---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Backoff Strategy

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

When retrying, the wait time should increase with each attempt - exponential backoff. This prevents overwhelming a struggling service.

## 📋 Concrete Example

Attempt 1: fail, wait 1s. Attempt 2: fail, wait 2s. Attempt 3: fail, wait 4s. Attempt 4: fail, wait 8s. Attempt 5: success. The increasing waits give the service time to recover.

## 🔗 Analogy

Knocking on a door - knock, wait 2s, knock again, wait 4s, knock again, wait 8s. Each time you wait longer, giving the person inside more time to answer. Backoff gives services time to recover.

## Related Concepts

- [[retry-logic|Retry Logic]]
- [[rate-limit|Rate Limit]]
- [[error-recovery|Error Recovery]]
