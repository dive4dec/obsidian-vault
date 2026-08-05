---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Schema

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The JSON schema describing a tool parameters and return type. The model uses this to know how to call the tool.

## Concrete Example

Schema: {name: terminal, parameters: {command: string, timeout: int}}. The model sees this and knows: I need to provide a command string. Structured interface.

## Analogy

A recipe format - it tells you what ingredients to provide and in what order. The tool schema tells the model what parameters to provide.

## Related Concepts

- [[tool-calling|Tool Calling]]
- [[tool-registry|Tool Registry]]
- [[tool-handler|Tool Handler]]
