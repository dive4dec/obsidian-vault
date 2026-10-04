---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Plan Mode

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Plan mode asks the agent to explore and design before it acts, then presents the finished plan for approval. `dsh-plan-mode` is a per-agent planning feature with deployment guidance, a `/plan` command, and a user-reviewed exit; the active state survives session resume and forks. Every tool stays available, so enforced limits still come from sandbox mode and approval prompts.

## Concrete Example

Enter with `/plan` (optionally with a message or attachments), leave with `/plan off`, approve the review to continue, or return feedback for more planning.

## Analogy

Writing the design doc for sign-off before touching the keyboard.

## Related Concepts

- [[plan|Plan]]
- [[plan-approval|Plan Approval]]
- [[user-questions|User Questions]]
