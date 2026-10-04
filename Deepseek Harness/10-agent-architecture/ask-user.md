---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Ask User

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

`ask_user_question` lets the model pause work and ask the human for confirmation, a choice, or missing information. `dsh-tool-ask-user` accepts one or more questions and returns their answers as compact JSON; the call waits until an answer is accepted or the turn is cancelled, and a live child agent owned by another agent cannot call it — it must report unresolved questions in its final result.

## Concrete Example

The model calls the `ask_user_question` tool with structured questions and blocks until a compatible interaction surface returns an answer.

## Analogy

Raising a hand mid-task to get a decision before moving on.

## Related Concepts

- [[user-questions|User Questions]]
- [[plan-approval|Plan Approval]]
- [[agent-safety|Agent Safety]]
