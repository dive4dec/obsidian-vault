---
tags: [DSH-Configuration]
domain: Configuration
---

# Scope

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-scope` lets plugin authors give each agent or group an isolated contribution set with a shared lifetime. Child scopes inherit ancestor contributions, with the nearest definition taking precedence, while ancestor scopes can observe descendant activity; neither relationship works in reverse. Disposing a scope removes everything owned by it. It is a dependency-free library for per-agent or per-group isolation that does not depend on the agent loop or presets.

## Concrete Example

A plugin creates a child scope per agent so each gets its own contribution set, and disposing the scope cleans up everything it owns.

## Analogy

It is a namespaced container for a plugin's state, like a per-request closure with inheritance.

## Related Concepts

- [[config-schema|Config Schema]]
- [[plugin-inventory|Plugin Inventory]]
