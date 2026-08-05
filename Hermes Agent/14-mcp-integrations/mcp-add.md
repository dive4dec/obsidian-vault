---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Add

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

Adding an MCP server to Hermes. Command: hermes mcp add NAME. Specifies transport (command or URL).

## Concrete Example

hermes mcp add github --command npx @modelcontextprotocol/server-github. Or: hermes mcp add weather --url https://mcp.weather.com/sse. The server is added to config and available on next session.

## Analogy

Adding a new app to your phone - you download and install it. It appears on your home screen. hermes mcp add installs a new MCP server and its tools appear in Hermes.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[mcp-remove|MCP Remove]]
- [[mcp-list|MCP List]]
