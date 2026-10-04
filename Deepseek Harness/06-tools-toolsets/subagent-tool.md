---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Subagent Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-subagent gives an agent a named tool that delegates work to a configured child-agent backend; each instance needs a distinct toolName and provider (spawn, fork, acp). In one-shot mode calls wait for the child by default; in continuable mode they start a persistent child in the background and return an id for later messages. The child returns its result, not intermediate steps, and failed runs return errors instead of partial success.

## Concrete Example

Configure provider: spawn and toolName: subagent over dsh-subagent-spawn-in-process; the child inherits persona, tool access, and depth limits from agentOptions.

## Analogy

Handing a scoped errand to a junior assistant and waiting for their report.

## Related Concepts

- [[subagent-control|Subagent Control]]
- [[delegation|Delegation]]
- [[workflow-tool|Workflow Tool]]
