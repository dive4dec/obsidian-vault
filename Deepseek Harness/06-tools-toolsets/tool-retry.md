---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Retry

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Tool retry is the model's path after a tool error: read the error result, adjust arguments or approach, and call again. For sandbox denials, dsh defines one narrow retry — the exact command again with wider sandbox_permissions and a justification — after which the user must approve. dsh-repeat-tool-reminder nudges against the opposite failure mode: repeating the same call with identical arguments.

## Concrete Example

A denied bash call is retried once as the exact same command with sandbox_permissions=workspace-write and a one-sentence justification.

## Analogy

Trying the same door once more with the right key, not kicking it down.

## Related Concepts

- [[tool-error|Tool Error]]
- [[repeat-tool-reminder|Repeat Tool Reminder]]
- [[tool-call|Tool Call]]
