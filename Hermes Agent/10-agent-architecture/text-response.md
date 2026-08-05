---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Text Response

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

A text response is the final answer the model gives when it has no more tool calls to make. This ends the current turn.

## Concrete Example

After checking the weather with a tool, the model writes Today is 28 degrees and sunny. That text goes to you as the answer.

## Analogy

Like the teacher saying class dismissed after finishing the lesson: no more actions needed.

## Related Concepts

- [[tool_call-response|tool_call response]]
- [[agent-loop|Agent Loop]]
- [[run_conversation|run_conversation]]
