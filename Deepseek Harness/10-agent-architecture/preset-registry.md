---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Preset Registry

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The registry chooses which preset a session uses and lets one process run several agent compositions at once. `dsh-agent-preset-registry` owns revision retention and release: a required `default` field names the preset used when none is requested, and a `selectedDefault` field retains the user's per-session choice over the deployment default.

## Concrete Example

Configure `default: standard` on the `agent-preset-registry` plugin; new sessions resolve the user's `selectedDefault` over it, and a `read` renders a declaration's child list back as entry-list YAML.

## Analogy

A directory of job profiles the floor manager pulls from when assigning a task.

## Related Concepts

- [[agent-preset|Agent Preset]]
- [[agent-config|Agent Config]]
- [[agent-ui|Agent UI]]
