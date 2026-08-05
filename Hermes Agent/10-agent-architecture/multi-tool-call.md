---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Multi-Tool Call

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Sometimes the model calls several tools in one turn. Hermes runs them and collects all results before continuing.

## Concrete Example

The model calls read_file on three files at once. Hermes runs all three and returns three results in one turn.

## Analogy

Like a waiter carrying three plates to the kitchen at once instead of making three trips.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[handle_function_call|handle_function_call]]
- [[tool_call-response|tool_call response]]
