---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Remove

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

Removing an MCP server. Command: hermes mcp remove NAME. Tools from that server are no longer available.

## Concrete Example

hermes mcp remove filesystem. The filesystem server is stopped. Its tools (read_file, search) disappear from Hermes. The server itself is not deleted, just disconnected.

## Analogy

Uninstalling an app from your phone - the app is removed. Its features are gone. The app still exists in the store if you want it back. hermes mcp remove disconnects a server.

## Related Concepts

- [[mcp-add|MCP Add]]
- [[mcp-server|MCP Server]]
- [[mcp-list|MCP List]]
