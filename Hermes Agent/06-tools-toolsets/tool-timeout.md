---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Timeout

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The maximum time a tool can run before being killed. Configured per-tool or globally.

## Concrete Example

terminal timeout: 180s. If a command runs longer than 180s, it is killed. Prevents hanging. web_search timeout: 30s. Different timeouts for different tools.

## Analogy

A timer on an exam - when time is up, you must stop. Tool timeout stops tools that run too long.

## Related Concepts

- [[toolsets|Toolsets]]
- [[terminal-config|Terminal Config]]
- [[config-yaml|Config YAML]]
