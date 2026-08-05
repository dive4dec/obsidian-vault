---
tags: [Agent-Fundamentals]
domain: Agent Fundamentals
---

# Approval Workflow

> **Domain:** [[_agent-fundamentals-moc|Agent Fundamentals]]

## 🎯 Motivation

A process where agent actions are categorized: auto-approve (safe), notify-then-act (moderate), require-approval (risky).

## 📋 Concrete Example

Safe (read file): auto-approve. Moderate (write file): notify user, proceed if no objection in 5s. Risky (delete file, spend money): require explicit human approval.

## 🔗 Analogy

A company expense policy - under $10: auto-approved. $10-$100: notify manager. Over $100: require manager approval. The approval workflow scales oversight with risk.

## Related Concepts

- [[human-in-the-loop|Human-in-the-Loop]]
- [[guardrails|Guardrails]]
- [[autonomy|Autonomy]]
