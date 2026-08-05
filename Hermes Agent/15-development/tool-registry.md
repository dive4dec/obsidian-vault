---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Tool Registry

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Central registry of all tools. Located in tools/registry.py. Tools register themselves at import time.

## Concrete Example

registry.register(name=terminal, toolset=terminal, schema=..., handler=...). At startup, all tools/*.py files are imported. Each registers itself. The registry is the master list.

## Analogy

A phone directory - every phone number is listed with a name. The tool registry lists every tool with its name, schema, and handler. The model uses this directory to call tools.

## Related Concepts

- [[tool-dispatch|Tool Dispatch]]
- [[toolsets|Toolsets]]
- [[project-layout|Project Layout]]
