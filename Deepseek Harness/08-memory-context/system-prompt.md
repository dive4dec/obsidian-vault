---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# System Prompt

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The framing prompt that shapes the agent's behavior for a run. `dsh-system-prompt` lets agents receive one ordered system prompt and the tool schemas for each model step, and is the place to add prompt sections, dynamic runtime facts, reusable variables, or tool schemas while controlling the fixed harness identity, deployment persona, and tool order.

## Concrete Example

Register a contribution through `agent.ctx` to affect that agent alone and shadow a same-named global; the config owns the fixed opener, runtime context, persona prefix/suffix, and tool order, while everything else comes from registered contributions.

## Analogy

The "you are…" framing line at the top of a role-play prompt that sets the tone for the whole conversation.

## Related Concepts

- [[prompt-assembly|Prompt Assembly]]
- [[role-play|System Role]]
- [[instructions|Instructions]]
- [[time-context|Time Context]]
