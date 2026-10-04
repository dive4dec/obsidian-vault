---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Subagent Control

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-subagent-control adds the global tools for managing continuable children: send_message steers between a direct parent and child, interrupt_agent stops a child's current turn while keeping its inbox and descendants intact, and the separate list-agents plugin adds list_agents. A working target receives a message at its nearest step boundary; an inactive target is resumed through the continuation lifecycle. The call returns only acceptance, never a reply.

## Concrete Example

send_message agent_id=<child> message="..." returns the accepted message's stable messageId; list_agents scope=children lists your direct children.

## Analogy

The walkie-talkie and pause button for the assistants you dispatched.

## Related Concepts

- [[subagent-tool|Subagent Tool]]
- [[delegation|Delegation]]
- [[jobs-tool|Jobs Tool]]
- [[goal-tool|Goal Tool]]
