---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Client

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

Hermes built-in MCP client. Connects to MCP servers, discovers their tools, and makes them available to the model.

## Concrete Example

Hermes (MCP client) connects to filesystem server. Discovers: read_file, write_file, search. These tools now appear in Hermes tool list. The model can call them like any other tool.

## Analogy

A universal remote control - it connects to your TV, sound system, and streaming box. Each device provides different functions. The remote (client) unifies them. Hermes MCP client connects to multiple servers.

## Related Concepts

- [[mcp-overview|MCP Overview]]
- [[mcp-server|MCP Server]]
- [[tool-discovery|Tool Discovery]]
