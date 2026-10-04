---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Presentation

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-agent-tool-presentation fixes, per agent preset, what the model sees: every native tool schema, only a run_code tool with a generated SDK, or both. Each preset chooses independently via the required mode field, so native and PTC agents can share one process without sharing tool catalogs. Selecting ptc or both requires a compatible PTC runtime or the preset is rejected at mount time.

## Concrete Example

An agent preset sets mode: both so the model can call native tools and also run code against a generated SDK.

## Analogy

Choosing which seats in the control room the model is allowed to occupy.

## Related Concepts

- [[tools|Tools]]
- [[tool|Tool]]
- [[toolsets|Toolsets]]
