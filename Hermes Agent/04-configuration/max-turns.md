---
tags: [Configuration]
domain: Configuration
---

# Max Turns

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The maximum number of agent loop iterations per conversation. Prevents infinite loops. Default: 30.

## Concrete Example

agent.max_turns: 30. If the agent loops 30 times without finishing, it stops. Prevents runaway loops that waste API credits.

## Analogy

A chess game timer - each player has limited moves. Max turns limits how many times the agent can loop before stopping.

## Related Concepts

- [[agent-config|Agent Config]]
- [[config-yaml|Config YAML]]
- [[agent-loop|Agent Loop]]
