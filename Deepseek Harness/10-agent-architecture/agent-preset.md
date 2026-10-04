---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Preset

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

A preset is a preconfigured agent defined in ordinary Cordis YAML — its child plugins declare the tools, prompt sections, and skills the agent composes. `dsh-agent-preset` registers a definition and returns its disposer; definitions load eagerly, and edits affect subsequently created agents. Declare several presets and let sessions select one.

## Concrete Example

A `@deepseek-ai/dsh-agent-preset` row with `config.id: standard` and a `plugins` list defines the preset; the declaration row's `id` addresses edits while `config.id` is the identity sessions save.

## Analogy

A saved blueprint: name it, then build any number of workers from it.

## Related Concepts

- [[preset-registry|Preset Registry]]
- [[persona|Persona]]
- [[agent-prompt|Agent Prompt]]
- [[agent-config|Agent Config]]
