---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Model Context Protocol

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

MCP is an open standard that lets AI applications securely connect to external data sources and tools, standardizing how models access the outside world.

## 📋 Concrete Example

Instead of writing custom integrations for every tool, an MCP server exposes a standard interface. Any MCP-compatible client (like an AI agent) can use it to read files, query databases, etc.

## 🔗 Analogy

USB-C for AI tools - before USB-C, every device had a different charger. MCP standardizes the connection so any AI can plug into any tool without custom adapters.

## Related Concepts

- [[function-calling|Function Calling]]
- [[tool-use|Tool Use]]
- [[api-integration|API Integration]]
