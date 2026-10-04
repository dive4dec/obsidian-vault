---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Registry

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The tool registry is ctx.tools, the registry every tool plugin registers into and the loop dispatches through. Registering a tool is enough to make it visible — the registry feeds its schemas into system-prompt assembly automatically. Per-agent restrictions can narrow the set of schemas a given agent's model actually sees.

## Concrete Example

Each plugin like @deepseek-ai/dsh-tool-todo registers its todo_write tool into ctx.tools at composition time.

## Analogy

A directory of services the agent is allowed to request.

## Related Concepts

- [[tools|Tools]]
- [[tool|Tool]]
- [[toolsets|Toolsets]]
- [[core-tools|Core Tools]]
