---
tags: [Configuration]
domain: Configuration
---

# Agent Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The agent section of config.yaml. Controls max_turns, tool_use_enforcement, reasoning level, personality.

## Concrete Example

agent: max_turns: 30, tool_use_enforcement: strict, reasoning: medium, personality: SOUL.md. The agent section controls how Hermes behaves in conversations.

## Analogy

A job description - it defines how an employee should work, their limits, and their style. The agent config is Hermes job description.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[agent-loop|Agent Loop]]
