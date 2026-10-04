---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# System Role

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The system-role framing that sets the agent's identity and behavior for a run. `dsh-system-prompt` owns the fixed harness identity, the deployment persona prefix and suffix, and the runtime context, and lets agent-scoped contributions override same-named global defaults so one agent can adopt a distinct identity.

## Concrete Example

The config's fixed opener and persona prefix/suffix set the agent's role; a contribution registered through `agent.ctx` can override a same-named global for that agent alone.

## Analogy

The "in this scene you are…" line that tells a character how to behave for the whole act.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[prompt-assembly|Prompt Assembly]]
- [[role|Message Role]]
- [[ordering|Context Ordering]]
