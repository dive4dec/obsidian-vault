---
tags: [Configuration]
domain: Configuration
---

# Delegation Config

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The delegation section: enabled, max_spawn_depth, max_concurrent_children, model.

## Concrete Example

delegation: enabled: true, max_spawn_depth: 1, max_concurrent_children: 3. Hermes can spawn up to 3 subagents, each with depth 1. The delegation config controls subagents.

## Analogy

A company org chart - how many teams, how many levels, who reports to whom. Delegation config sets the org chart for Hermes subagents.

## Related Concepts

- [[config-sections|Config Sections]]
- [[config-yaml|Config YAML]]
- [[delegate-task|Delegate Task]]
