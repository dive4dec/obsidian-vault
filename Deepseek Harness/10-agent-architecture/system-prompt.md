---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# System Prompt

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The system prompt is the ordered framing text the agent sends with each model step, plus the available tool schemas. `dsh-system-prompt` lets you add prompt sections, dynamic runtime facts, reusable variables, and tool schemas, and controls the fixed harness identity, deployment persona, runtime context, and tool order; agent-scoped contributions override same-named global defaults without affecting other agents.

## Concrete Example

`dsh-system-prompt` composes one ordered prompt per step — an empty rendering clears every prompt version from derived history, and invalid combinations fail assembly rather than send a malformed prompt.

## Analogy

The job brief a worker reads before every task, plus the list of tools they may reach for.

## Related Concepts

- [[agent-prompt|Agent Prompt]]
- [[persona|Persona]]
- [[agent-instructions|Agent Instructions]]
- [[agent-context|Agent Context]]
