---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Handler

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The Python function that executes when a tool is called. Located in tools/*.py. Each tool has its own handler.

## Concrete Example

terminal handler: def terminal(command, timeout=180): # executes shell command, returns output. The handler does the actual work.

## Analogy

The chef in a kitchen - the order (tool call) comes in, the chef (handler) cooks it. Each tool has its own chef (handler).

## Related Concepts

- [[tool-dispatch|Tool Dispatch]]
- [[tool-registry|Tool Registry]]
- [[tool-schema|Tool Schema]]
