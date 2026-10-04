---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Default Model

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The default model answers one question for freshly created agents: which provider and model should they start on when their session does not specify one? `dsh-agent-default-model` keeps provider, model, and reasoning effort as live Config fields, so entry points consult it instead of each re-implementing a default.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-agent-default-model'
  config:
    provider: deepseek
    model: deepseek-chat
```
`currentSelection()` returns the detached `{ provider, model, reasoningEffort? }` for a new agent.

## Analogy

The house model — what you get unless you explicitly pick another.

## Related Concepts

- [[agent-config|Agent Config]]
- [[preset-registry|Preset Registry]]
- [[agent-context|Agent Context]]
