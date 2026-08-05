---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Tool Registration

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

Tools must be registered before the agent can use them. Registration tells Hermes the tool name, schema, and function.

## Concrete Example

The terminal tool is registered at startup. The search_files tool is registered too. The model can now call either one.

## Analogy

Like signing up for a club: once registered you can participate in activities.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[tool-schema|Tool Schema]]
- [[tool_use_enforcement|tool_use_enforcement]]
