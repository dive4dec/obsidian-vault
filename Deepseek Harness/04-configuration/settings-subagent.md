---
tags: [DSH-Configuration]
domain: Configuration
---

# Subagent Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-subagent` sets how deep and how wide delegation may go, and which models agents may choose for their subagents. The page groups the two Host namespaces, `subagent` and `subagent-model-selection`, under one save. It exists while the Host serves either namespace and shows the sections it serves.

## Concrete Example

Set the delegation depth and width, plus the allowed subagent models, on Plugins → Subagent; both namespaces save together.

## Analogy

It is the guardrail dial for how much an agent may delegate.

## Related Concepts

- [[settings|Settings]]
- [[settings-models|Model Settings]]
