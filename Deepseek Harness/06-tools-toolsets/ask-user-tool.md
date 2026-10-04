---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Ask User Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-ask-user's ask_user_question lets the model pause work and ask the human for confirmation, a choice, or missing information, returning answers as compact JSON. The call waits until an answer is accepted or the turn is cancelled; each question carries a stable id echoed in the answer, and a recommended option goes first with (Recommended) appended. A live child agent owned by another agent cannot call it and must report unresolved questions in its final result.

## Concrete Example

ask_user_question questions=[{id:"cleanup", question:"Proceed with the destructive cleanup?", options:[...]}] returns { answers: [{ id: "cleanup", selected: [...] }] }.

## Analogy

Raising a hand mid-task to ask the boss before acting.

## Related Concepts

- [[subagent-control|Subagent Control]]
- [[tool-approval|Tool Approval]]
- [[tool|Tool]]
