---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Discovery

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The agent dynamically discovers available tools at runtime rather than having them hard-coded.

## 📋 Concrete Example

Agent starts, queries: 'What tools are available?' MCP server responds: [read_file, write_file, search_web, calculator]. Agent registers them dynamically.

## 🔗 Analogy

A tourist arriving at a hotel - they check what amenities are available (pool, gym, spa) upon arrival. They use what they find. Tool discovery lets agents find and use available tools at runtime.

## Related Concepts

- [[tool-registration|Tool Registration]]
- [[mcp|MCP]]
- [[dynamic-configuration|Dynamic Configuration]]
