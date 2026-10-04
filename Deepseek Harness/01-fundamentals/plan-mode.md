---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Plan Mode

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Plan mode asks an agent to explore and design before execution, then presents the finished plan for approval. Enter it with `/plan`, optionally with a message or attachments; leave with `/plan off`, approve the review to continue, or return feedback for more planning. Every tool remains available in plan mode, so enforced limits come from sandbox mode and approval prompts; the active state survives session resume and forks.

## Concrete Example

`/plan` starts a planning turn; approving the plan review continues to execution.

## Analogy

It is a blueprint review: the contractor shows the drawings and waits for the green light before touching the foundation.

## Related Concepts

- [[approval|Approval]]
- [[goal|Goal]]
- [[permission|Permission]]
