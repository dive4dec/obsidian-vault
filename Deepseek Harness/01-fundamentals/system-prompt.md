---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# System Prompt

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-system-prompt` assembles the one ordered system prompt and available tool schemas the model sees each step. It owns the fixed harness identity opener ("You are an AI agent powered by DeepSeek Harness."), the deployment persona prefix/suffix, dynamic runtime context, and tool order via `toolOrder`. Plugins contribute named, ordered sections and `{{variable}}` references resolved at each assembly; agent-scoped contributions shadow same-named globals. Invalid complete-prompt combinations and unresolved variables fail assembly instead of sending a malformed prompt.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-system-prompt'
  config:
    includeHarnessIdentity: true
    personaPrefix: 'You are the deployment assistant.'
```

## Analogy

It is the opening brief given to a new hire: who you are, your role, and which tools you may reach for.

## Related Concepts

- [[persona|Persona]]
- [[context|Context]]
- [[skill|Skill]]
