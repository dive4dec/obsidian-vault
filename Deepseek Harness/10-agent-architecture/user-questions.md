---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# User Questions

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The user-questions service is the seam a model-facing tool or permission plugin uses when it needs to pause work and ask the human for a decision. `dsh-user-questions` owns `ctx.userQuestions`, a waterfall-based Q&A service shared by tools, permission plugins, local answerers, and Agent-scoped Web interactions. Use it when a consumer must suspend an operation until the user answers.

## Concrete Example

A tool calls `ctx.userQuestions` to suspend the operation and wait for the human's answer before continuing.

## Analogy

Putting the task on hold and walking over to ask the human a quick question.

## Related Concepts

- [[ask-user|Ask User]]
- [[plan-approval|Plan Approval]]
- [[agent-safety|Agent Safety]]
