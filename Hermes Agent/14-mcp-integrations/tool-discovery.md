---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# Tool Discovery

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

The process of MCP client querying a server for available tools. Happens automatically on connection.

## Concrete Example

Hermes connects to filesystem MCP server. Sends: list_tools. Server responds: [read_file, write_file, search, delete_file]. Hermes registers all four. Automatic, no manual configuration.

## Analogy

Browsing a library catalog - you search and see what books are available. Tool discovery queries an MCP server for available tools. You see what is offered.

## Related Concepts

- [[mcp-client|MCP Client]]
- [[mcp-tool|MCP Tool]]
- [[mcp-server|MCP Server]]
