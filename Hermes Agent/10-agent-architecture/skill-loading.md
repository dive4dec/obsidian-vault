---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Skill Loading

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Skills are reusable instruction sets. Hermes loads relevant skills before answering to follow proven workflows.

## Concrete Example

When you ask about GitHub, Hermes loads the github-pr-workflow skill so it follows the correct PR steps.

## Analogy

Like a student pulling out the right textbook before starting a specific assignment.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[system-prompt|system prompt]]
- [[memory-store|Memory Store]]
