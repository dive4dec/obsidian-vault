---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Registry

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Central registry of all tools. Located in tools/registry.py. Tools register at import time. The master list of available tools.

## Concrete Example

registry.register(name=terminal, schema=..., handler=...). At startup, all tools/*.py are imported. Each registers itself. The registry is the master list.

## Analogy

A phone directory - every number is listed with a name. The tool registry lists every tool with its name, schema, and handler.

## Related Concepts

- [[tool-dispatch|Tool Dispatch]]
- [[toolsets|Toolsets]]
- [[tool-handler|Tool Handler]]
