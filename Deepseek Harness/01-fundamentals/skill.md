---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Skill

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A skill is a reusable, task-specific instruction the agent can load on demand. `dsh-skill` is the registry that merges skills from local directories, embedded plugin data, or remote services into one catalog; `dsh-skill-filesystem` provides local discovery and `dsh-tool-skill` surfaces it to the model, which loads the selected skill's full instruction body by its kebab-case name. Each skill carries an invocation policy (`modelInvocable`, `userInvocable`) deciding which surfaces may advertise and load it.

## Concrete Example

Pairing `- name: '@deepseek-ai/dsh-skill'` with `@deepseek-ai/dsh-tool-skill` gives the model a `skill` tool that loads a skill's instructions on request.

## Analogy

It is a cookbook recipe you can open exactly when the dish is on the menu, rather than reading the whole book.

## Related Concepts

- [[tool-calling|Tool Calling]]
- [[subagent|Subagent]]
- [[system-prompt|System Prompt]]
