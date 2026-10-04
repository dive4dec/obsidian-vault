---
tags: [DSH-Configuration]
domain: Configuration
---

# Agent Loop Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-agent-loop` sets how many parallel-safe tool calls one step may run at once. Open Plugins in the sidebar, select **Agent loop** in the Official group; the page stages what you type and writes only on save, marks a value you overrode, and offers to reset it to the deployment's default. The page exists while the Host serves the `agent-loop` namespace.

## Concrete Example

Raise the parallel tool-call limit on Plugins → Agent loop; the override is marked and resettable.

## Analogy

It is the concurrency dial for the agent's tool calls per step.

## Related Concepts

- [[settings|Settings]]
- [[settings-shell|Shell Settings]]
