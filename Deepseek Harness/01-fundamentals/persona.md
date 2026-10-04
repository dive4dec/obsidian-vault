---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Persona

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A persona is a user-configurable identity/behavior layer applied to the agent. The deployment-wide persona is set on the `dsh-system-prompt` row's `personaPrefix`/`personaSuffix`; `dsh-persona` is a scoped row a preset mounts to give one agent its own persona, shadowing the deployment defaults for that session. It can make the prefix the session's complete system prompt (`complete: true`) and suppress dynamic runtime-context snapshots (`includeRuntimeContext: false`). Without it, a preset could change an agent's tools but never its identity.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-persona'
  config:
    prefix: You are a terse systems engineer who answers in short commands.
```

## Analogy

It is the accent and tone a support agent adopts — same knowledge, different voice.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[agent|Agent]]
