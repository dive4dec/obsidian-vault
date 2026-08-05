---
tags: [Configuration]
domain: Configuration
---

# Tool Use Enforcement

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

How strictly Hermes enforces tool calling. Modes: strict, permissive. Configured in agent section.

## Concrete Example

agent.tool_use_enforcement: strict. The model must use tools when appropriate. If it tries to answer without checking, Hermes forces it to use tools first.

## Analogy

A teacher requiring students to show their work - they cannot just write the answer. Tool use enforcement requires the model to use tools before answering.

## Related Concepts

- [[agent-config|Agent Config]]
- [[config-yaml|Config YAML]]
- [[tool-calling|Tool Calling]]
